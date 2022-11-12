import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutAspnetrolesDTO } from "../../dtos/PutAspnetrolesDTO";

export class PutAspnetrolesUserCase {
    async execute({
        id,
        name,
        normalizedName,
        concurrencyStamp,

    }: PutAspnetrolesDTO) {
        const cliente = await prisma.aspnetrole.update({
            where: {
                id,
            },
            data: {
                name,
                normalizedName,
                concurrencyStamp,
            }
        })
        return cliente
    }
}