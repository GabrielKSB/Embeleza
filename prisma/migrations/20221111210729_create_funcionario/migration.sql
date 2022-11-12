-- CreateTable
CREATE TABLE "procedimento" (
    "idProcedimento" SERIAL NOT NULL,
    "nomeProcedimento" TEXT NOT NULL,
    "descricaoProcedimento" TEXT NOT NULL,
    "valorProcedimento" DOUBLE PRECISION NOT NULL,
    "dtRetorno" TIMESTAMP(3) NOT NULL,
    "ativo" INTEGER NOT NULL,

    CONSTRAINT "procedimento_pkey" PRIMARY KEY ("idProcedimento")
);
