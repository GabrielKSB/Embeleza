import { Request, Response } from 'express';
import { FindAspnetrolesUserCase } from './FindAspnetrolesUseCase';


export class FindAspnetrolesController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAspnetrolesUseCase = new FindAspnetrolesUserCase();

        const result = await findAspnetrolesUseCase.execute();

        return res.status(201).json(result);
    }
}