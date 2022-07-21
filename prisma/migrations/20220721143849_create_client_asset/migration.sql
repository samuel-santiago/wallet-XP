/*
  Warnings:

  - You are about to drop the column `published` on the `clients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ticker]` on the table `assets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `clients` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "published";

-- CreateTable
CREATE TABLE "clients_assets" (
    "client_id" SERIAL NOT NULL,
    "asset_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "clients_assets_pkey" PRIMARY KEY ("client_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_assets_email_key" ON "clients_assets"("email");

-- CreateIndex
CREATE UNIQUE INDEX "assets_ticker_key" ON "assets"("ticker");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
