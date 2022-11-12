export interface CreateClienteDTO {
    nomeCliente: string
    dtNascimento: Date
    cpf: string
    logradouro?: string
    bairro?: string
    cidade?: string
    estado?: string
    cep?: string
    genero?: string
    email?: string
    numTelefone?: string
    ativo?: number
}