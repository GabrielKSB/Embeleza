import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class FindFuncionarioUserCase {
    async execute(){

        const funcionario = await prisma.funcionario.findMany()
        return funcionario
    }
}