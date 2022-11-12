import { Request, Response } from 'express';
import { CreateClienteUserCase } from './CreateClienteUseCase';


export class CreateClienteController {
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

        const createClienteUseCase = new CreateClienteUserCase();

        const result = await createClienteUseCase.execute({
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