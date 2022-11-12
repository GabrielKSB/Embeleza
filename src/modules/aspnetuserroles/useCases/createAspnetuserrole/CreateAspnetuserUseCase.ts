import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { AspnetuserroleCreateDTO } from "../../dtos/CreateAspnetuserroleDTO";

export class CreateAspnetuserroleUserCase {
    async execute({
        aspnetuserId,
        aspnetroleId

    }: AspnetuserroleCreateDTO) {

        const aspnetuserrole = await prisma.aspnetuserrole.create({
            data: {
                aspnetuserId,
                aspnetroleId
            }
        })
        return aspnetuserrole
    }
}