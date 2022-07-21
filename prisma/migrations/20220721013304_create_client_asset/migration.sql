-- CreateTable
CREATE TABLE "clients_exchange" (
    "client_id" SERIAL NOT NULL,
    "asset_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "clients_exchange_pkey" PRIMARY KEY ("client_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_exchange_email_key" ON "clients_exchange"("email");
