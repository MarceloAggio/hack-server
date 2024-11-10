/*
  Warnings:

  - You are about to drop the column `fixedIncome` on the `monthly_incomes` table. All the data in the column will be lost.
  - Added the required column `fixedIncome` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `monthly_incomes` DROP COLUMN `fixedIncome`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `fixedIncome` DOUBLE NOT NULL;
