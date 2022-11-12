import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutProdutoDTO } from "../../dtos/PutProdutoDTO";


export class PutProdutoUserCase {
    async execute({
        idProduto,
        nomeProduto,
        dtValidadeProduto,
        valorProduto,
        estoqueProduto,
        ativo,

    }: PutProdutoDTO) {
        const produto = await prisma.produto.update({
            where: {
                idProduto,
            },
            data: {
                idProduto,
                nomeProduto,
                dtValidadeProduto,
                valorProduto,
                estoqueProduto,
                ativo,
            }
        })
        return produto
    }
}