import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { AspnetrolesCreateDTO } from "../../dtos/CreateAspnetrolesDTO";

export class CreateAspnetrolesUserCase {
    async execute({
        name,
        normalizedName,
        concurrencyStamp,

    }: AspnetrolesCreateDTO) {

        const aspnetroles = await prisma.aspnetrole.create({
            data: {
                name,
                normalizedName,
                concurrencyStamp,
            }
        })
        return aspnetroles
    }
}