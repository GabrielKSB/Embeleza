import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutAspnetuserroleDTO } from "../../dtos/PutAspnetuserroleDTO";

export class PutAspnetuserroleUseCase {
    async execute({
        id,
        aspnetuserId,
        aspnetroleId

    }: PutAspnetuserroleDTO) {
        const aspnetuserrole = await prisma.aspnetuserrole.update({
            where: {
                id,
            },
            data: {
                id,
                aspnetuserId,
                aspnetroleId
            }
        })
        return aspnetuserrole
    }
}