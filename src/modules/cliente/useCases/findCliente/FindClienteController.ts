import { Request, Response } from 'express';
import { FindClienteUserCase } from './FindClienteUseCase';


export class FindClienteController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findClienteUseCase = new FindClienteUserCase();

        const result = await findClienteUseCase.execute();

        return res.status(201).json(result);
    }
}