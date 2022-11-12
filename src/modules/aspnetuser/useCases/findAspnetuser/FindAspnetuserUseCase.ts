import { prisma } from "../../../../database/prismaClient";

export class FindAspnetuserUserCase {
    async execute(){

        const aspnetuser = await prisma.aspnetuser.findMany({
            include:{
                Aspnetuserrole:true
            }
        })
        return aspnetuser
    }
}