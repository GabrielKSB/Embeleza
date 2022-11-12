import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { AspnetuserCreateDTO } from "../../dtos/CreateAspnetuserDTO";

export class CreateAspnetuserUserCase {
    async execute({
        userName,
        normalizedUserName,
        email,
        normalizedEmail,
        emailConfirmed,
        passwordHash,
        securityStamp,
        concurrencyStamp,
        phoneNumber,
        phoneNumberConfirmed,
        twoFactorEnabled,
        lockoutEnd,
        lockoutEnabled,
        accessFailedCount,
        perfil,

    }: AspnetuserCreateDTO) {

        const aspnetuser = await prisma.aspnetuser.create({
            data: {
                userName,
                normalizedUserName,
                email,
                normalizedEmail,
                emailConfirmed,
                passwordHash,
                securityStamp,
                concurrencyStamp,
                phoneNumber,
                phoneNumberConfirmed,
                twoFactorEnabled,
                lockoutEnd,
                lockoutEnabled,
                accessFailedCount,
                perfil,
            }
        })
        return aspnetuser
    }
}