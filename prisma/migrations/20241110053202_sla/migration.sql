/*
  Warnings:

  - You are about to drop the column `financialHealthAnalysis` on the `action_plans` table. All the data in the column will be lost.
  - You are about to drop the column `investmentSuggestions` on the `action_plans` table. All the data in the column will be lost.
  - You are about to drop the column `periodicUpdates` on the `action_plans` table. All the data in the column will be lost.
  - You are about to drop the column `progressTracking` on the `action_plans` table. All the data in the column will be lost.
  - You are about to drop the column `savingGoals` on the `action_plans` table. All the data in the column will be lost.
  - You are about to drop the column `suggestedReserveAmount` on the `action_plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `action_plans` DROP COLUMN `financialHealthAnalysis`,
    DROP COLUMN `investmentSuggestions`,
    DROP COLUMN `periodicUpdates`,
    DROP COLUMN `progressTracking`,
    DROP COLUMN `savingGoals`,
    DROP COLUMN `suggestedReserveAmount`,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
