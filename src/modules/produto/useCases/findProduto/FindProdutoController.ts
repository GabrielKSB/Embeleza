import { Request, Response } from 'express';
import { FindProdutoUserCase } from './FindProdutoUseCase';


export class FindProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findProdutoUseCase = new FindProdutoUserCase();

        const result = await findProdutoUseCase.execute();

        return res.status(201).json(result);
    }
}