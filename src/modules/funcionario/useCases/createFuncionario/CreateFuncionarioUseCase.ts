import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateFuncionarioDTO } from "../../dtos/CreateFuncionarioDTO";

export class CreateFuncionarioUserCase {
    async execute({
        nomeFuncionario,
        dtNascimento,
        cpf,
        genero,
        email,
        perfil,
        senha,
        ativo

    }: CreateFuncionarioDTO) {
        const funcionarioValidation = await prisma.funcionario.findFirst({
            where: {
                cpf,
            }
        })
        if (funcionarioValidation) {
            throw new AppError("Cpf já cadastradoo")
        }

        const funcionario = await prisma.funcionario.create({
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