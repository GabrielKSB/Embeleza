import { prisma } from "../../../../database/prismaClient";

export class FindAspnetuserclaimsUserCase {
    async execute(){

        const aspnetuserclaim = await prisma.aspnetuserclaim.findMany()
        return aspnetuserclaim
    }
}