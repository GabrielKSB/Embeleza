import { Request, Response } from 'express';
import { CreateAspnetuserroleUserCase } from './CreateAspnetuserUseCase';


export class CreateAspnetuserroleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            aspnetuserId,
            aspnetroleId

        } = req.body;

        const createAspnetuserroleUseCase = new CreateAspnetuserroleUserCase();

        const result = await createAspnetuserroleUseCase.execute({
            aspnetuserId,
            aspnetroleId
        });

        return res.status(201).json(result);
    }
}