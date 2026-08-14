"use server";

import { cookies } from "next/headers";
import { jwtPayload, signJwt, verifyJwt } from "../../lib/jwt";
import { prisma } from "../../lib/prisma";
import { LoginSchema, RegisterSchema } from "@/validators/schema/user";
import bcrypt from "bcryptjs";
import z from "zod";
// import { toast } from "sonner";
// import { error } from "console";

// Creating a user(registration)
export async function registerUser(data: z.infer<typeof RegisterSchema>) {
  // const rawData = {

  //   first_name: formData.get("name"),
  //   last_name: formData.get("last_name"),
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // };

  // Validate with zod
  // try{

  // } catch(error){
  //   toast.success()
  // }
  const validatedData = RegisterSchema.safeParse(data);

  if (!validatedData.success) {
    throw new Error(validatedData.error.issues[0].message);
  }
  const { email, password, first_name, last_name } = validatedData.data;
  //  Check existing user
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    // toast.error("User already exists!");
    // return {
    //   success: false,
    //   message: "User already exists!",
    // }
    throw new Error("user already exists!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);

  const user = await prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: hashedPassword,
    },
  });

  loginUserSession(user.id);
  return user;
}

// Now to create my login check
export async function LoginUser(data: z.infer<typeof LoginSchema>) {
  const { userEmail, userPassword } = data;
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (!user) {
      return {
        success: false,
        error: "User does not exist",
      };
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(userPassword, user.password);
    if (!isPasswordValid) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    await loginUserSession(user.id);
    // return user;
    return {
      success: true,
      user,
      error: null,
    };
  } catch (error) {
    throw new Error("An error occurred during login.");
  }
}

// Create Server actions - creating a session( during login)
export async function loginUserSession(userId: string) {
  const token = signJwt({ userId });
  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

// created a session for the database
// export async function createSession(userId: string) {
//   // Create DB Session
//   const session = await prisma.session.create({
//     data: {
//       userId,
//       expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
//     },
//   });

//   //2 sign jwt
//   const token = signJwt({
//     userId,
//   });

//   // 3 store token to cookie
//   const cookieStore = await cookies();
//   cookieStore.set("session", JSON.stringify(token), {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 7,
//   });

//   return session;
// }

export async function getUserId() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) {
    return {
      success: false,
      message: "No active session.",
    };
    // console.log("Could not get the value of session!");
    // return null;
  }

  //   verify token
  const payLoad = verifyJwt<jwtPayload>(token);
  if (!payLoad) {
    return {
      success: false,
      error: "Invalid session token",
    };
    // console.log("Failed to Verify Token");
    // return null;
  }

  return {
    success: true,
    userid: payLoad.userId,
  };
}

// Deleting Token for LogOut
export async function DeleteToken() {
  const cookieData = await cookies();
  const token = cookieData.get("session")?.value;
  if (!token) return null;

  const payLoad = verifyJwt<jwtPayload>(token);
  if (payLoad) {
    const cookieDelete = await cookies();
    cookieDelete.delete({ name: "session", path: "/" });
  } else {
    return null;
  }
}
