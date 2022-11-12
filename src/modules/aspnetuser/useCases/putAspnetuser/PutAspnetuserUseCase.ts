import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutAspnetuserDTO } from "../../dtos/PutAspnetuserDTO";

export class PutAspnetuserUseCase {
    async execute({
        id,
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

    }: PutAspnetuserDTO) {
        const aspnetuser = await prisma.aspnetuser.update({
            where: {
                id,
            },
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