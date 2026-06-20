/*
  Warnings:

  - You are about to drop the column `DOB` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LGA` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isMarried` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isSingle` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `occupationBio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profile` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "DOB",
DROP COLUMN "LGA",
DROP COLUMN "address",
DROP COLUMN "bio",
DROP COLUMN "city",
DROP COLUMN "isMarried",
DROP COLUMN "isSingle",
DROP COLUMN "occupation",
DROP COLUMN "occupationBio",
DROP COLUMN "phone",
DROP COLUMN "profile",
DROP COLUMN "state";

-- CreateTable
CREATE TABLE "Onboarding" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "occupationBio" TEXT NOT NULL,
    "marriagestatus" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "religon" TEXT NOT NULL,
    "DOB" TEXT NOT NULL,
    "LGA" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Onboarding_pkey" PRIMARY KEY ("id")
);
