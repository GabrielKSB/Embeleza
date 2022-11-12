import { Request, Response } from 'express';
import { FindAspnetroleclaimsUserCase } from './FindAspnetroleclaimsUseCase';


export class FindAspnetroleclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAspnetroleclaimsUseCase = new FindAspnetroleclaimsUserCase();

        const result = await findAspnetroleclaimsUseCase.execute();

        return res.status(201).json(result);
    }
}