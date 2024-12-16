-- CreateTable
CREATE TABLE `UsersAbilities` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `ability_id` VARCHAR(191) NOT NULL,
    `years_experience` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsersAbilities` ADD CONSTRAINT `UsersAbilities_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsersAbilities` ADD CONSTRAINT `UsersAbilities_ability_id_fkey` FOREIGN KEY (`ability_id`) REFERENCES `Abilities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
