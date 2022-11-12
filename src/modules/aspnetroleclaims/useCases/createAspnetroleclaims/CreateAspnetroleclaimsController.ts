import { Request, Response } from 'express';
import { CreateAspnetroleclaimsUserCase } from './CreateAspnetroleclaimsUseCase';


export class CreateAspnetroleclaimsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            roleId,
            claimType,
            claimValue,
        } = req.body;

        const createAspnetroleclaimsUseCase = new CreateAspnetroleclaimsUserCase();

        const result = await createAspnetroleclaimsUseCase.execute({
            roleId,
            claimType,
            claimValue,
        });

        return res.status(201).json(result);
    }
}