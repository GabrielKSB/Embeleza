-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "idCliente" INTEGER NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "dtNascimento" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "logradouro" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "cep" TEXT,
    "genero" TEXT,
    "email" TEXT,
    "numTelefone" TEXT,
    "ativo" INTEGER,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
