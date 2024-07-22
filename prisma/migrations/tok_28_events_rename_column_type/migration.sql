/*
  Warnings:

  - The primary key for the `event_type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `event_type_id` on the `event_type` table. All the data in the column will be lost.
  - Added the required column `type` to the `event` table without a default value. This is not possible if the table is not empty.
  - Made the column `start_date` on table `event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type_name` on table `event_type` required. This step will fail if there are existing NULL values in that column.

*/
-- Prepare Data
DELETE FROM "event";
DELETE FROM "event_type";

-- AlterTable
ALTER TABLE "event" ADD COLUMN "type" VARCHAR NOT NULL,
ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "end_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "event_type" DROP CONSTRAINT "event_type_pkey",
DROP COLUMN "event_type_id",
ALTER COLUMN "type_name" SET NOT NULL,
ADD CONSTRAINT "event_type_pkey" PRIMARY KEY ("type_name");

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_type_fkey" FOREIGN KEY ("type") REFERENCES "event_type"("type_name") ON DELETE NO ACTION ON UPDATE NO ACTION;
