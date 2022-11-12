import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { AspnetroleclaimsCreateDTO } from "../../dtos/CreateAspnetroleclaimsDTO";

export class CreateAspnetroleclaimsUserCase {
    async execute({
        roleId,
        claimType,
        claimValue,

    }: AspnetroleclaimsCreateDTO) {

        const aspnetroleclaim = await prisma.aspnetroleclaim.create({
            data: {
                roleId,
                claimType,
                claimValue,
            }
        })
        return aspnetroleclaim
    }
}