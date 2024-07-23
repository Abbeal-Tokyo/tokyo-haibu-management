/*
  Warnings:

  - You are about to drop the column `location` on the `event` table. All the data in the column will be lost.
  - The primary key for the `location_tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `location_tag` table. All the data in the column will be lost.
  - The primary key for the `tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `tag` table. All the data in the column will be lost.
  - Added the required column `tag_name` to the `location_tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag_name` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "location_tag" DROP CONSTRAINT "location_tag_tag_id_fkey";

-- AlterTable
ALTER TABLE "event" DROP COLUMN "location",
ADD COLUMN     "location_id" BIGINT;

-- AlterTable
ALTER TABLE "location_tag" DROP CONSTRAINT "location_tag_pkey",
DROP COLUMN "tag_id",
ADD COLUMN     "tag_name" TEXT NOT NULL,
ADD CONSTRAINT "location_tag_pkey" PRIMARY KEY ("location_id", "tag_name");

-- AlterTable
ALTER TABLE "tag" DROP CONSTRAINT "tag_pkey",
DROP COLUMN "tag_id",
DROP COLUMN "title",
ADD COLUMN     "tag_name" VARCHAR NOT NULL,
ADD CONSTRAINT "tag_pkey" PRIMARY KEY ("tag_name");

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "location_tag" ADD CONSTRAINT "location_tag_tag_name_fkey" FOREIGN KEY ("tag_name") REFERENCES "tag"("tag_name") ON DELETE NO ACTION ON UPDATE NO ACTION;
