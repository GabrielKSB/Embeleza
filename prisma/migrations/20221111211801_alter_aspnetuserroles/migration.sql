/*
  Warnings:

  - The primary key for the `aspnetuserroles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `roleId` on the `aspnetuserroles` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `aspnetuserroles` table. All the data in the column will be lost.
  - Added the required column `aspnetroleId` to the `aspnetuserroles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aspnetuserId` to the `aspnetuserroles` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `aspnetuserroles` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "aspnetuserroles" DROP CONSTRAINT "aspnetuserroles_pkey",
DROP COLUMN "roleId",
DROP COLUMN "userId",
ADD COLUMN     "aspnetroleId" TEXT NOT NULL,
ADD COLUMN     "aspnetuserId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "aspnetuserroles_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "aspnetuserroles" ADD CONSTRAINT "aspnetuserroles_aspnetuserId_fkey" FOREIGN KEY ("aspnetuserId") REFERENCES "aspnetusers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aspnetuserroles" ADD CONSTRAINT "aspnetuserroles_aspnetroleId_fkey" FOREIGN KEY ("aspnetroleId") REFERENCES "aspnetroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
