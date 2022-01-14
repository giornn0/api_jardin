-- CreateTable
CREATE TABLE `Jardin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nombre` VARCHAR(50) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,
    `domicilio` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contacto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `telefono` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `detalles` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `jardin_id` INTEGER NOT NULL,

    UNIQUE INDEX `Contacto_jardin_id_key`(`jardin_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contacto` ADD CONSTRAINT `Contacto_jardin_id_fkey` FOREIGN KEY (`jardin_id`) REFERENCES `Jardin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
