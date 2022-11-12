import { prisma } from "../../../../database/prismaClient";

export class FindAspnetuserroleUserCase {
    async execute(){

        const aspnetuserrole = await prisma.aspnetuserrole.findMany()
        return aspnetuserrole
    }
}