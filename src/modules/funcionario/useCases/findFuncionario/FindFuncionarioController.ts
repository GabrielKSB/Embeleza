import { Request, Response } from 'express';
import { FindFuncionarioUserCase } from './FindFuncionarioUseCase';


export class FindFuncionarioController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findFuncionarioUseCase = new FindFuncionarioUserCase();

        const result = await findFuncionarioUseCase.execute();

        return res.status(201).json(result);
    }
}