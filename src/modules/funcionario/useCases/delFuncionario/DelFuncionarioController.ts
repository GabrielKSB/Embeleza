import { Request, Response } from 'express';
import { DelFuncionarioUserCase } from './DelFuncionarioUseCase';


export class DelFuncionarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            cpf,
        } = req.body;

        const delFuncionarioUseCase = new DelFuncionarioUserCase();

        const result = await delFuncionarioUseCase.execute({
            cpf,
        });

        return res.status(201).json(result);
    }
}