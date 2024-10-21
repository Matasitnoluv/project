/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "users_id" UUID NOT NULL,
    "fullname" TEXT,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status_role" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_by" TEXT NOT NULL,
    "update_by" TEXT NOT NULL,
    "update_date" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("users_id")
);