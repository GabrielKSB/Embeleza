import { prisma } from "../../../../database/prismaClient";

export class FindAspnetroleclaimsUserCase {
    async execute(){

        const aspnetroleclaim = await prisma.aspnetroleclaim.findMany()
        return aspnetroleclaim
    }
}