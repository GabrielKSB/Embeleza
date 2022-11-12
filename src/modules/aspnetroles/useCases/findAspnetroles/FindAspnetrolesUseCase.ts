import { prisma } from "../../../../database/prismaClient";

export class FindAspnetrolesUserCase {
    async execute(){

        const aspnetrole = await prisma.aspnetrole.findMany()
        return aspnetrole
    }
}