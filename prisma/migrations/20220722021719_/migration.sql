/*
  Warnings:

  - You are about to alter the column `price` on the `assets` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `balance` on the `clients` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - The primary key for the `clients_assets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `clients_assets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `clients_assets` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `clients_assets` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clients_assets_email_key";

-- AlterTable
ALTER TABLE "assets" ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "balance" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "clients_assets" DROP CONSTRAINT "clients_assets_pkey",
DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "client_id" DROP DEFAULT,
ALTER COLUMN "client_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "clients_assets_pkey" PRIMARY KEY ("client_id");
DROP SEQUENCE "clients_assets_client_id_seq";

-- AddForeignKey
ALTER TABLE "clients_assets" ADD CONSTRAINT "clients_assets_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients_assets" ADD CONSTRAINT "clients_assets_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
