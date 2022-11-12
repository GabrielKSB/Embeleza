import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutProcedimentoDTO } from "../../dtos/PutProcedimentoDTO";


export class PutProcedimentoUserCase {
    async execute({
        idProcedimento,
        nomeProcedimento,
        descricaoProcedimento,
        valorProcedimento,
        dtRetorno,
        ativo,

    }: PutProcedimentoDTO) {
        const procedimento = await prisma.procedimento.update({
            where: {
                idProcedimento,
            },
            data: {
                idProcedimento,
                nomeProcedimento,
                descricaoProcedimento,
                valorProcedimento,
                dtRetorno,
                ativo,
            }
        })
        return procedimento
    }
}