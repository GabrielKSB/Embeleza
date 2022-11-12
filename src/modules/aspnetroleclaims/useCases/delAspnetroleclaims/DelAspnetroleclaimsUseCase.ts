import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelAspnetroleclaimsDTO } from "../../dtos/DelAspnetroleclaimsDTO";

export class DelAspnetroleclaimsUserCase {
    async execute({
        id,
    }: DelAspnetroleclaimsDTO) {
        const aspnetroleclaim = await prisma.aspnetroleclaim.delete({
            where:{
                id,
            },
        })
        return aspnetroleclaim
    }
}