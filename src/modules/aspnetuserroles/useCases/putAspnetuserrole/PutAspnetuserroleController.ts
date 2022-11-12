import { Request, Response } from 'express';
import { PutAspnetuserroleUseCase } from './PutAspnetuserroleUseCase';


export class PutAspnetuserroleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
            aspnetuserId,
            aspnetroleId
        } = req.body;

        const putAspnetuserroleUseCase = new PutAspnetuserroleUseCase();

        const result = await putAspnetuserroleUseCase.execute({
            id,
            aspnetuserId,
            aspnetroleId
        });

        return res.status(201).json(result);
    }
}