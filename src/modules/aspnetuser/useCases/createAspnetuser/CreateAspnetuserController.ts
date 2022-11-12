import { Request, Response } from 'express';
import { CreateAspnetuserUserCase } from './CreateAspnetuserUseCase';


export class CreateAspnetuserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
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

        const createAspnetuserUseCase = new CreateAspnetuserUserCase();

        const result = await createAspnetuserUseCase.execute({
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