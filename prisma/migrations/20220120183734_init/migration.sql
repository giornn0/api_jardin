/*
  Warnings:

  - Added the required column `titulo` to the `Contacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contacto` ADD COLUMN `titulo` VARCHAR(50) NOT NULL;
