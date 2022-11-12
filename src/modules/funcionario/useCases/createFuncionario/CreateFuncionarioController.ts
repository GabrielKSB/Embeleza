import { Request, Response } from 'express';
import { CreateFuncionarioUserCase } from './CreateFuncionarioUseCase';


export class CreateFuncionarioController {
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

        const createFuncionarioUseCase = new CreateFuncionarioUserCase();

        const result = await createFuncionarioUseCase.execute({
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