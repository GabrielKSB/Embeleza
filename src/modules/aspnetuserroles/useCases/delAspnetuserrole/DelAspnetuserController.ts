import { Request, Response } from 'express';
import { DelAspnetuserroleUserCase } from './DelAspnetuserUseCase';



export class DelAspnetuserroleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
        } = req.body;

        const delAspnetuserroleUseCase = new DelAspnetuserroleUserCase();

        const result = await delAspnetuserroleUseCase.execute({
            id,
        });

        return res.status(201).json(result);
    }
}