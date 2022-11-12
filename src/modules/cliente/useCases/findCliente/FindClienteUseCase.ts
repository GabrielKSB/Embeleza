import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class FindClienteUserCase {
    async execute(){

        const cliente = await prisma.cliente.findMany()
        return cliente
    }
}