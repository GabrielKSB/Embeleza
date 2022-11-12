import { Request, Response } from 'express';
import { CreateProcedimentoUserCase } from './CreateProcedimentoUseCase';


export class CreateProcedimentoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            idProcedimento,
            nomeProcedimento,
            descricaoProcedimento,
            valorProcedimento,
            dtRetorno,
            ativo,

        } = req.body;

        const createProcedimentoUseCase = new CreateProcedimentoUserCase();

        const result = await createProcedimentoUseCase.execute({
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