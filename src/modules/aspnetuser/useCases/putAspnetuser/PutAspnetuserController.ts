import { Request, Response } from 'express';
import { PutAspnetuserUseCase } from './PutAspnetuserUseCase';


export class PutAspnetuserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
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
        } = req.body;

        const putAspnetuserUseCase = new PutAspnetuserUseCase();

        const result = await putAspnetuserUseCase.execute({
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
        });

        return res.status(201).json(result);
    }
}