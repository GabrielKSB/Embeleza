import { Request, Response } from 'express';
import { DelProcedimentoUserCase } from './DelProcedimentoUseCase';


export class DelProcedimentoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            idProcedimento,
        } = req.body;

        const delProcedimentoUseCase = new DelProcedimentoUserCase();

        const result = await delProcedimentoUseCase.execute({
            idProcedimento,
        });

        return res.status(201).json(result);
    }
}