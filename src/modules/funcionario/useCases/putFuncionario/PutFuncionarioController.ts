import { Request, Response } from 'express';
import { PutFuncionarioUserCase } from './PutFuncionarioUseCase';


export class PutFuncionarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            nomeFuncionario,
            dtNascimento,
            cpf,
            genero,
            email,
            perfil,
            senha,
            ativo
        } = req.body;

        const putFuncionarioUseCase = new PutFuncionarioUserCase();

        const result = await putFuncionarioUseCase.execute({
            nomeFuncionario,
            dtNascimento,
            cpf,
            genero,
            email,
            perfil,
            senha,
            ativo
        });

        return res.status(201).json(result);
    }
}