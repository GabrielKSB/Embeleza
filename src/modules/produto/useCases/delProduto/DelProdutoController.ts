import { Request, Response } from 'express';
import { DelProdutoUserCase } from './DelProdutoUseCase';


export class DelProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            idProduto,
        } = req.body;

        const delProdutoUseCase = new DelProdutoUserCase();

        const result = await delProdutoUseCase.execute({
            idProduto,
        });

        return res.status(201).json(result);
    }
}