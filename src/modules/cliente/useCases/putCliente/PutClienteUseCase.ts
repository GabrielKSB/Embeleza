import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutClienteDTO } from "../../dtos/PutClienteDTO";

export class PutClienteUserCase {
    async execute({
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

    }: PutClienteDTO) {
        const cliente = await prisma.cliente.update({
            where:{
                cpf,
            },
            data: {
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
            }
        })
        return cliente
    }
}