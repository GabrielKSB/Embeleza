/*
  Warnings:

  - The primary key for the `aspnetuserroles` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "aspnetuserroles" DROP CONSTRAINT "aspnetuserroles_pkey",
ALTER COLUMN "userId" DROP DEFAULT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "aspnetuserroles_pkey" PRIMARY KEY ("userId");
DROP SEQUENCE "aspnetuserroles_userId_seq";
