import { Request, Response } from 'express';
import { CreateAspnetrolesUserCase } from './CreateAspnetrolesUseCase';


export class CreateAspnetrolesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            normalizedName,
            concurrencyStamp,
        } = req.body;

        const createAspnetrolesUseCase = new CreateAspnetrolesUserCase();

        const result = await createAspnetrolesUseCase.execute({
            name,
            normalizedName,
            concurrencyStamp,
        });

        return res.status(201).json(result);
    }
}