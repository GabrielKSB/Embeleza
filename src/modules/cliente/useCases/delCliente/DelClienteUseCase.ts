import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelClienteDTO } from "../../dtos/DelClienteDTO";

export class DelClienteUserCase {
    async execute({
        cpf,
    }: DelClienteDTO) {
        const cliente = await prisma.cliente.delete({
            where:{
                cpf,
            },
        })
        return cliente
    }
}