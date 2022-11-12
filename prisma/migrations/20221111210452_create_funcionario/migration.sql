-- CreateTable
CREATE TABLE "funcionario" (
    "idFuncionario" SERIAL NOT NULL,
    "nomeFuncionario" TEXT NOT NULL,
    "dtNascimento" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" INTEGER NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("idFuncionario")
);
