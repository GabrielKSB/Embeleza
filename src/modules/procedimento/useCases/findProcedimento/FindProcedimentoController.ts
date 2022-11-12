import { Request, Response } from 'express';
import { FindProcedimentoUserCase } from './FindProcedimentoUseCase';


export class FindProcedimentoController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findProcedimentoUseCase = new FindProcedimentoUserCase();

        const result = await findProcedimentoUseCase.execute();

        return res.status(201).json(result);
    }
}