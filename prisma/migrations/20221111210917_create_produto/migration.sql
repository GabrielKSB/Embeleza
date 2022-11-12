-- CreateTable
CREATE TABLE "produto" (
    "idProduto" SERIAL NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "dtValidadeProduto" TIMESTAMP(3) NOT NULL,
    "valorProduto" DOUBLE PRECISION NOT NULL,
    "estoqueProduto" INTEGER NOT NULL,
    "ativo" INTEGER NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("idProduto")
);
