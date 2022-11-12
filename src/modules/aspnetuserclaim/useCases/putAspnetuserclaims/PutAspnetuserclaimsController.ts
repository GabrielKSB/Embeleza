import { Request, Response } from 'express';
import { PutAspnetuserclaimsUserCase } from './PutAspnetuserclaimsUseCase';


export class PutAspnetuserclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
            userId,
            claimType,
            claimValue,
        } = req.body;

        const putAspnetuserclaimsUseCase = new PutAspnetuserclaimsUserCase();

        const result = await putAspnetuserclaimsUseCase.execute({
            id,
            userId,
            claimType,
            claimValue,
        });

        return res.status(201).json(result);
    }
}