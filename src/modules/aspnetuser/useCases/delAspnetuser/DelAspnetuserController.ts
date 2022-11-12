import { Request, Response } from 'express';
import { DelAspnetuserUserCase } from './DelAspnetuserUseCase';


export class DelAspnetuserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
        } = req.body;

        const delAspnetuserUseCase = new DelAspnetuserUserCase();

        const result = await delAspnetuserUseCase.execute({
            id,
        });

        return res.status(201).json(result);
    }
}