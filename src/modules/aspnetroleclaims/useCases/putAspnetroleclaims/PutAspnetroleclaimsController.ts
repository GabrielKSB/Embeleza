import { Request, Response } from 'express';
import { PutAspnetroleclaimsUserCase } from './PutAspnetroleclaimsUseCase';


export class PutAspnetroleclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
            roleId,
            claimType,
            claimValue,
        } = req.body;

        const putAspnetroleclaimsUseCase = new PutAspnetroleclaimsUserCase();

        const result = await putAspnetroleclaimsUseCase.execute({
            id,
            roleId,
            claimType,
            claimValue,
        });

        return res.status(201).json(result);
    }
}