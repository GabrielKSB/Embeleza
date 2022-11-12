import { Request, Response } from 'express';
import { DelAspnetuserclaimsUserCase } from './DelAspnetuserclaimsUseCase';


export class DelAspnetuserclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
        } = req.body;

        const delAspnetuserclaimsUseCase = new DelAspnetuserclaimsUserCase();

        const result = await delAspnetuserclaimsUseCase.execute({
            id,
        });

        return res.status(201).json(result);
    }
}