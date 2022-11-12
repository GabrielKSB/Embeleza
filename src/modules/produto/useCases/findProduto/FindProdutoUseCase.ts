import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

export class FindProdutoUserCase {
    async execute(){

        const produto = await prisma.produto.findMany()
        return produto
    }
}