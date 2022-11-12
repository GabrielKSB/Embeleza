import { Request, Response } from 'express';
import { FindAspnetuserroleUserCase } from './FindAspnetuserroleUseCase';


export class FindAspnetuserroleController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAspnetuserroleUseCase = new FindAspnetuserroleUserCase();

        const result = await findAspnetuserroleUseCase.execute();

        return res.status(201).json(result);
    }
}