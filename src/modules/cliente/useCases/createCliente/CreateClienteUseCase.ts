import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateClienteDTO } from "../../dtos/CreateClienteDTO";

export class CreateClienteUserCase {
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

    }: CreateClienteDTO) {
        const clienteValidation = await prisma.cliente.findFirst({
            where: {
                cpf,
            }
        })
        if (clienteValidation) {
            throw new AppError("Cpf já cadastradoo")
        }

        const cliente = await prisma.cliente.create({
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