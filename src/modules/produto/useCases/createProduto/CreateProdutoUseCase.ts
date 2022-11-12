import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateProdutoDTO } from "../../dtos/CreateProdutoDTO";

export class CreateProdutoUserCase {
    async execute({
        idProduto,
        nomeProduto,
        dtValidadeProduto,
        valorProduto,
        estoqueProduto,
        ativo,

    }: CreateProdutoDTO) {
        const produtoValidation = await prisma.produto.findFirst({
            where: {
                idProduto,
            }
        })
        if (produtoValidation) {
            throw new AppError("Procedimento já cadastradoo")
        }

        const produto = await prisma.produto.create({
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