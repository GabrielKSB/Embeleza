import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelProdutoDTO } from "../../dtos/DelProdutoDTO";

export class DelProdutoUserCase {
    async execute({
        idProduto,
    }: DelProdutoDTO) {
        const produto = await prisma.produto.delete({
            where:{
                idProduto,
            },
        })
        return produto
    }
}