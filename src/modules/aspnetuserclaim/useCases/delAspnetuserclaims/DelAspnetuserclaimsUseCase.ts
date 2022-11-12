import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelAspnetuserclaimDTO } from "../../dtos/DelAspnetuserclaimDTO";

export class DelAspnetuserclaimsUserCase {
    async execute({
        id,
    }: DelAspnetuserclaimDTO) {
        const aspnetuserclaim = await prisma.aspnetuserclaim.delete({
            where:{
                id,
            },
        })
        return aspnetuserclaim
    }
}