import { Request, Response } from 'express';
import { DelAspnetrolesUserCase } from './DelAspnetrolesUseCase';


export class DelAspnetrolesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
        } = req.body;

        const delAspnetrolesUseCase = new DelAspnetrolesUserCase();

        const result = await delAspnetrolesUseCase.execute({
            id,
        });

        return res.status(201).json(result);
    }
}