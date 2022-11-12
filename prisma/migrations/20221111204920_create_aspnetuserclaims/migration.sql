-- CreateTable
CREATE TABLE "aspnetuserclaims" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "claimType" TEXT,
    "claimValue" TEXT,

    CONSTRAINT "aspnetuserclaims_pkey" PRIMARY KEY ("id")
);
