import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { DelFuncionarioDTO } from "../../dtos/DelFuncionarioDTO";

export class DelFuncionarioUserCase {
    async execute({
        cpf,
    }: DelFuncionarioDTO) {
        const funcionario = await prisma.funcionario.delete({
            where:{
                cpf,
            },
        })
        return funcionario
    }
}