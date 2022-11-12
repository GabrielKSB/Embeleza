-- CreateTable
CREATE TABLE "aspnetroleclaims" (
    "id" SERIAL NOT NULL,
    "roleId" TEXT NOT NULL,
    "claimType" TEXT,
    "claimValue" TEXT,

    CONSTRAINT "aspnetroleclaims_pkey" PRIMARY KEY ("id")
);
