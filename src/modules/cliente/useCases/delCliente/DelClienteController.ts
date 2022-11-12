import { Request, Response } from 'express';
import { DelClienteUserCase } from './DelClienteUseCase';


export class DelClienteController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            cpf,
        } = req.body;

        const delClienteUseCase = new DelClienteUserCase();

        const result = await delClienteUseCase.execute({
            cpf,
        });

        return res.status(201).json(result);
    }
}