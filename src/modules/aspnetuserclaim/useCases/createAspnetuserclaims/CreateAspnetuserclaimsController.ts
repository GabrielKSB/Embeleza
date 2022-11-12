import { Request, Response } from 'express';
import { CreateAspnetuserclaimsUserCase } from './CreateAspnetuserclaimsUseCase';


export class CreateAspnetuserclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            userId,
            claimType,
            claimValue,
        } = req.body;

        const createAspnetuserclaimsUseCase = new CreateAspnetuserclaimsUserCase();

        const result = await createAspnetuserclaimsUseCase.execute({
            userId,
            claimType,
            claimValue,
        });

        return res.status(201).json(result);
    }
}