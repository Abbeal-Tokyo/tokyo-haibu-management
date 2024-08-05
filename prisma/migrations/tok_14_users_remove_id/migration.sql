/*
  Warnings:

  - The primary key for the `invitation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `invitation` table. All the data in the column will be lost.
  - The primary key for the `rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `rating` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `email` to the `invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `rating` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- Prepare Data
DELETE FROM "invitation";
DELETE FROM "rating";

-- DropForeignKey
ALTER TABLE "invitation" DROP CONSTRAINT "invitation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_user_id_fkey";

-- AlterTable
ALTER TABLE "invitation" DROP CONSTRAINT "invitation_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "email" VARCHAR NOT NULL,
ADD CONSTRAINT "invitation_pkey" PRIMARY KEY ("email", "event_id");

-- AlterTable
ALTER TABLE "rating" DROP CONSTRAINT "rating_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "email" VARCHAR NOT NULL,
ADD CONSTRAINT "rating_pkey" PRIMARY KEY ("location_id", "email");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "user_id",
ALTER COLUMN "email" SET NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("email");

-- AddForeignKey
ALTER TABLE "invitation" ADD CONSTRAINT "invitation_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE NO ACTION ON UPDATE NO ACTION;
