import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class FindProcedimentoUserCase {
    async execute(){

        const procedimento = await prisma.procedimento.findMany()
        return procedimento
    }
}