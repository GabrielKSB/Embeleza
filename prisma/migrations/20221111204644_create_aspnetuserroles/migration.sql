-- CreateTable
CREATE TABLE "aspnetuserroles" (
    "userId" SERIAL NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "aspnetuserroles_pkey" PRIMARY KEY ("userId")
);
