import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateProcedimentoDTO } from "../../dtos/CreateProcedimentoDTO";

export class CreateProcedimentoUserCase {
    async execute({
        idProcedimento,
        nomeProcedimento,
        descricaoProcedimento,
        valorProcedimento,
        dtRetorno,
        ativo,

    }: CreateProcedimentoDTO) {
        const procedimentoValidation = await prisma.procedimento.findFirst({
            where: {
                idProcedimento,
            }
        })
        if (procedimentoValidation) {
            throw new AppError("Procedimento já cadastradoo")
        }

        const procedimento = await prisma.procedimento.create({
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