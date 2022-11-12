import { Request, Response } from 'express';
import { FindAspnetuserclaimsUserCase } from './FindAspnetuserclaimsUseCase';


export class FindAspnetuserclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAspnetuserclaimsUseCase = new FindAspnetuserclaimsUserCase();

        const result = await findAspnetuserclaimsUseCase.execute();

        return res.status(201).json(result);
    }
}