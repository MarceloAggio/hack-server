/*
  Warnings:

  - Added the required column `category` to the `entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `entries` ADD COLUMN `category` ENUM('ALIMENTACAO', 'TRANSPORTE', 'LAZER', 'SAUDE', 'EDUCACAO', 'INVESTIMENTO', 'OUTROS') NOT NULL;
