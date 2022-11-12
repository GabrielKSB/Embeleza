import { Request, Response } from 'express';
import { DelAspnetroleclaimsUserCase } from './DelAspnetroleclaimsUseCase';


export class DelAspnetroleclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
        } = req.body;

        const delAspnetroleclaimsUseCase = new DelAspnetroleclaimsUserCase();

        const result = await delAspnetroleclaimsUseCase.execute({
            id,
        });

        return res.status(201).json(result);
    }
}