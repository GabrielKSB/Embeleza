import { Request, Response } from 'express';
import { CreateProdutoUserCase } from './CreateProdutoUseCase';


export class CreateProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            idProduto,
            nomeProduto,
            dtValidadeProduto,
            valorProduto,
            estoqueProduto,
            ativo,

        } = req.body;

        const createProdutoUseCase = new CreateProdutoUserCase();

        const result = await createProdutoUseCase.execute({

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