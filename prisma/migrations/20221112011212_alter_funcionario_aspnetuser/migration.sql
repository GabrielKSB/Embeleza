/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `funcionario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "aspnetusers" ALTER COLUMN "phoneNumberConfirmed" DROP NOT NULL,
ALTER COLUMN "phoneNumberConfirmed" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_cpf_key" ON "funcionario"("cpf");
