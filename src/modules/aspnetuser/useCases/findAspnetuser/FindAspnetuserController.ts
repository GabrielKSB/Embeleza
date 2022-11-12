import { Request, Response } from 'express';
import { FindAspnetuserUserCase } from './FindAspnetuserUseCase';


export class FindAspnetuserController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAspnetuserUseCase = new FindAspnetuserUserCase();

        const result = await findAspnetuserUseCase.execute();

        return res.status(201).json(result);
    }
}