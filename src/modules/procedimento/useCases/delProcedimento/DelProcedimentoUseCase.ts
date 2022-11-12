import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelProcedimentoDTO } from "../../dtos/DelProcedimentoDTO";

export class DelProcedimentoUserCase {
    async execute({
        idProcedimento,
    }: DelProcedimentoDTO) {
        const procedimento = await prisma.procedimento.delete({
            where:{
                idProcedimento,
            },
        })
        return procedimento
    }
}