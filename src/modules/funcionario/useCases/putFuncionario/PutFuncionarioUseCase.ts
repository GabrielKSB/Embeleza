import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { PutFuncionarioDTO } from "../../dtos/PutFuncionarioDTO";


export class PutFuncionarioUserCase {
    async execute({
        nomeFuncionario,
            dtNascimento,
            cpf,
            genero,
            email,
            perfil,
            senha,
            ativo

    }: PutFuncionarioDTO) {
        const funcionario = await prisma.funcionario.update({
            where:{
                cpf,
            },
            data: {
                nomeFuncionario,
            dtNascimento,
            cpf,
            genero,
            email,
            perfil,
            senha,
            ativo
            }
        })
        return funcionario
    }
}