import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelAspnetuserroleDTO } from "../../dtos/DelAspnetuserroleDTO";

export class DelAspnetuserroleUserCase {
    async execute({
        id,
    }: DelAspnetuserroleDTO) {
        const aspnetuserrole = await prisma.aspnetuserrole.delete({
            where:{
                id,
            },
        })
        return aspnetuserrole
    }
}