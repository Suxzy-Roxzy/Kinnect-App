import { JWT_SECRET } from "../data/constants";
import jwt, { SignOptions } from "jsonwebtoken";

const jwtSecret = JWT_SECRET;

interface jwtPayload {
  userId: string;
  sessionId: string;
}

export function signJwt(payLoad: jwtPayload, options?: SignOptions) {
  if (!jwtSecret) {
    console.log("jwt Secret is not defined");
    throw new Error("jwt Secret is not defined");
  }

  return jwt.sign(payLoad, jwtSecret, { expiresIn: "7d", ...options });
}

export function verifyJwt<T>(token: string): T | null {
  if (!jwtSecret) {
    console.log("jwt Secret is not defined");
    throw new Error("jwt Secret is not defined");
  }

  try {
    return jwt.verify(token, jwtSecret) as T;
  } catch {
    return null;
  }
}
