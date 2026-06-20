"use server";

import { cookies } from "next/headers";
import { signJwt, verifyJwt } from "../../lib/jwt";
import { prisma } from "../../lib/prisma";
import { JwtPayload } from "jsonwebtoken";
import { RegisterSchema } from "@/validators/schema/user";
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
    throw new Error("user already exists!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);

  await prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: hashedPassword,
    },
  });
}

// Create Server actions - creating a session( during login)
export async function createSession(userId: string) {
  // Create DB Session
  const session = await prisma.session.create({
    data: {
      userId,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 27 * 7),
    },
  });

  //2 sign jwt
  const token = signJwt({
    userId,
    sessionId: session.id,
  });

  // 3 store token to cookie
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify(token), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return session;
}

export async function GetSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) {
    console.log("Could not get the value of session!");
    return null;
  }

  //   verify token
  const payLoad = verifyJwt<JwtPayload>(token);
  if (!payLoad) {
    console.log("Failed to Verify Token");
    return null;
  }

  // Verify session in DB
  const sessionData = await prisma.session.findUnique({
    where: { id: payLoad.sessionId },
    include: { user: true },
  });

  //   Expiration Check

  if (sessionData && sessionData?.expiresAt < new Date()) {
    await prisma.session.delete({ where: { id: sessionData.id } });
    return null;
  }
}

// Deleting Token for LogOut
export async function DeleteToken() {
  const cookieData = await cookies();
  const token = cookieData.get("session")?.value;
  if (!token) return null;

  const payLoad = verifyJwt<JwtPayload>(token);
  if (payLoad) {
    await prisma.session.delete({
      where: { id: payLoad.sessionId },
    });
  }

  const cookieDelete = await cookies();
  cookieDelete.delete({ name: "session", path: "/" });
}
