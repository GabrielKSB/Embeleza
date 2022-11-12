import { Request, Response } from 'express';
import { PutProdutoUserCase } from './PutProdutoUseCase';


export class PutProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            idProduto,
            nomeProduto,
            dtValidadeProduto,
            valorProduto,
            estoqueProduto,
            ativo,
        } = req.body;

        const putProdutoUseCase = new PutProdutoUserCase();

        const result = await putProdutoUseCase.execute({
            idProduto,
            nomeProduto,
            dtValidadeProduto,
            valorProduto,
            estoqueProduto,
            ativo,
        });

        return res.status(201).json(result);
    }
}