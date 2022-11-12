import { Request, Response } from 'express';
import { PutAspnetrolesUserCase } from './PutAspnetrolesUseCase';


export class PutAspnetrolesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
            name,
            normalizedName,
            concurrencyStamp,
        } = req.body;

        const putAspnetrolesUseCase = new PutAspnetrolesUserCase();

        const result = await putAspnetrolesUseCase.execute({
            id,
            name,
            normalizedName,
            concurrencyStamp,
        });

        return res.status(201).json(result);
    }
}