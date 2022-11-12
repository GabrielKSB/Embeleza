import { Request, Response } from 'express';
import { PutProcedimentoUserCase } from './PutProcedimentoUseCase';


export class PutProcedimentoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            idProcedimento,
            nomeProcedimento,
            descricaoProcedimento,
            valorProcedimento,
            dtRetorno,
            ativo,
        } = req.body;

        const putProcedimentoUseCase = new PutProcedimentoUserCase();

        const result = await putProcedimentoUseCase.execute({
            idProcedimento,
            nomeProcedimento,
            descricaoProcedimento,
            valorProcedimento,
            dtRetorno,
            ativo,
        });

        return res.status(201).json(result);
    }
}