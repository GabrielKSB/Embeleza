-- CreateTable
CREATE TABLE "aspnetusers" (
    "id" TEXT NOT NULL,
    "userName" TEXT,
    "normalizedUserName" TEXT,
    "email" TEXT,
    "normalizedEmail" TEXT,
    "emailConfirmed" INTEGER NOT NULL,
    "passwordHash" TEXT,
    "securityStamp" TEXT,
    "concurrencyStamp" TEXT,
    "phoneNumber" TEXT,
    "phoneNumberConfirmed" INTEGER NOT NULL,
    "twoFactorEnabled" INTEGER NOT NULL,
    "lockoutEnd" TIMESTAMP(3) NOT NULL,
    "lockoutEnabled" INTEGER NOT NULL,
    "accessFailedCount" INTEGER NOT NULL,
    "perfil" TEXT,

    CONSTRAINT "aspnetusers_pkey" PRIMARY KEY ("id")
);
