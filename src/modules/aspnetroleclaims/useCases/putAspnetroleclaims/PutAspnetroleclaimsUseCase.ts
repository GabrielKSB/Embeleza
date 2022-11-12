import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutAspnetroleclaimsDTO } from "../../dtos/PutAspnetroleclaimsDTO";

export class PutAspnetroleclaimsUserCase {
    async execute({
        id,
        roleId,
        claimType,
        claimValue,

    }: PutAspnetroleclaimsDTO) {
        const cliente = await prisma.aspnetroleclaim.update({
            where: {
                id,
            },
            data: {
                roleId,
                claimType,
                claimValue,
            }
        })
        return cliente
    }
}