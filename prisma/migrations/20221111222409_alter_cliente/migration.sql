/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");
