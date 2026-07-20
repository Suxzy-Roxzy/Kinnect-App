import { z } from "zod";

//   email         String       @unique
//   password      String
//   first_name    String
//   last_name     String
//   address       String
//   phone         String
//   occupation    String
//   occupationBio String
//   isSingle      String
//   isMarried     String
//   state         String
//   bio           String
//   profile       String
//   DOB           String
//   LGA           String
//   city          String
//   createdAt     DateTime     @default(now())
//   updatedAt     DateTime     @updatedAt
//   session       Session[]
//   memberships   Membership[]
// }

export const RegisterSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const LoginSchema = z.object({
  userEmail: z.email("Please enter a valid email address"),
  userPassword: z.string().min(8, "Password must be at least 8 characters long"),
});

export type RegisterSchematype = z.infer<typeof RegisterSchema>;
export type LoginSchematype = z.infer<typeof LoginSchema>;
