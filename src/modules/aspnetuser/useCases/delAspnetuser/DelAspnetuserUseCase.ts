import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelAspnetuserDTO } from "../../dtos/DelAspnetuserDTO";

export class DelAspnetuserUserCase {
    async execute({
        id,
    }: DelAspnetuserDTO) {
        const aspnetuser = await prisma.aspnetuser.delete({
            where:{
                id,
            },
        })
        return aspnetuser
    }
}