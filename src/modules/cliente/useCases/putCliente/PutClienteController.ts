import { Request, Response } from 'express';
import { PutClienteUserCase } from './PutClienteUseCase';


export class PutClienteController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            nomeCliente,
            cpf,
            dtNascimento,
            ativo,
            bairro,
            cep,
            cidade,
            email,
            estado,
            genero,
            logradouro,
            numTelefone
        } = req.body;

        const putClienteUseCase = new PutClienteUserCase();

        const result = await putClienteUseCase.execute({
            nomeCliente,
            cpf,
            dtNascimento,
            ativo,
            bairro,
            cep,
            cidade,
            email,
            estado,
            genero,
            logradouro,
            numTelefone
        });

        return res.status(201).json(result);
    }
}