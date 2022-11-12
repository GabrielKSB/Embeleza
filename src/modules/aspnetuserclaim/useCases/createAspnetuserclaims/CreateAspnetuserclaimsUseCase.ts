import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { AspnetuserclaimCreateDTO } from "../../dtos/CreateAspnetuserclaimDTO";

export class CreateAspnetuserclaimsUserCase {
    async execute({
        userId,
        claimType,
        claimValue,

    }: AspnetuserclaimCreateDTO) {

        const aspnetuserclaim = await prisma.aspnetuserclaim.create({
            data: {
                userId,
                claimType,
                claimValue,
            }
        })
        return aspnetuserclaim
    }
}