import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelAspnetrolesDTO } from "../../dtos/DelAspnetrolesDTO";

export class DelAspnetrolesUserCase {
    async execute({
        id,
    }: DelAspnetrolesDTO) {
        const aspnetrole = await prisma.aspnetrole.delete({
            where:{
                id,
            },
        })
        return aspnetrole
    }
}