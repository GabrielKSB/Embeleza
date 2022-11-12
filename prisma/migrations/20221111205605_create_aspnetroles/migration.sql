-- CreateTable
CREATE TABLE "aspnetroles" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "normalizedName" TEXT,
    "concurrencyStamp" TEXT,

    CONSTRAINT "aspnetroles_pkey" PRIMARY KEY ("id")
);
