import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutAspnetuserclaimDTO } from "../../dtos/PutAspnetuserclaimDTO";

export class PutAspnetuserclaimsUserCase {
    async execute({
        id,
        userId,
        claimType,
        claimValue,

    }: PutAspnetuserclaimDTO) {
        const cliente = await prisma.aspnetuserclaim.update({
            where: {
                id,
            },
            data: {
                userId,
                claimType,
                claimValue,
            }
        })
        return cliente
    }
}