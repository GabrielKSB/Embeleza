/*
  Warnings:

  - The primary key for the `cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `cliente` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE "cliente_idcliente_seq";
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_pkey",
DROP COLUMN "id",
ALTER COLUMN "idCliente" SET DEFAULT nextval('cliente_idcliente_seq'),
ADD CONSTRAINT "cliente_pkey" PRIMARY KEY ("idCliente");
ALTER SEQUENCE "cliente_idcliente_seq" OWNED BY "cliente"."idCliente";
