/*
  Warnings:

  - You are about to drop the column `jardin_id` on the `contacto` table. All the data in the column will be lost.
  - You are about to drop the `jardin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `colegio_id` to the `Contacto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contacto` DROP FOREIGN KEY `Contacto_jardin_id_fkey`;

-- AlterTable
ALTER TABLE `contacto` DROP COLUMN `jardin_id`,
    ADD COLUMN `colegio_id` INTEGER NOT NULL,
    ALTER COLUMN `updated_at` DROP DEFAULT;

-- DropTable
DROP TABLE `jardin`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_completo` VARCHAR(50) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `pass` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `tipo` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colegio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(50) NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,
    `domicilio` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Colegio_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Colegio` ADD CONSTRAINT `Colegio_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contacto` ADD CONSTRAINT `Contacto_colegio_id_fkey` FOREIGN KEY (`colegio_id`) REFERENCES `Colegio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
