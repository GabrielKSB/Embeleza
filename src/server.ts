import "express-async-errors"
import express, { NextFunction, Request, Response } from 'express';
import { AppError } from './errors/AppError';
import { CreateClienteController } from "./modules/cliente/useCases/createCliente/CreateClienteController";
import { FindClienteController } from "./modules/cliente/useCases/findCliente/FindClienteController";
import { PutClienteController } from "./modules/cliente/useCases/putCliente/PutClienteController";
import { DelClienteController } from "./modules/cliente/useCases/delCliente/DelClienteController";
import { FindAspnetroleclaimsController } from "./modules/aspnetroleclaims/useCases/findAspnetroleclaims/FindAspnetroleclaimsController";
import { CreateAspnetroleclaimsController } from "./modules/aspnetroleclaims/useCases/createAspnetroleclaims/CreateAspnetroleclaimsController";
import { PutAspnetroleclaimsController } from "./modules/aspnetroleclaims/useCases/putAspnetroleclaims/PutAspnetroleclaimsController";
import { DelAspnetroleclaimsController } from "./modules/aspnetroleclaims/useCases/delAspnetroleclaims/DelAspnetroleclaimsController";
import { FindAspnetuserclaimsController } from "./modules/aspnetuserclaim/useCases/findAspnetuserclaims/FindAspnetuserclaimsController";
import { CreateAspnetuserclaimsController } from "./modules/aspnetuserclaim/useCases/createAspnetuserclaims/CreateAspnetuserclaimsController";
import { PutAspnetuserclaimsController } from "./modules/aspnetuserclaim/useCases/putAspnetuserclaims/PutAspnetuserclaimsController";
import { DelAspnetuserclaimsController } from "./modules/aspnetuserclaim/useCases/delAspnetuserclaims/DelAspnetuserclaimsController";
import { FindAspnetrolesController } from "./modules/aspnetroles/useCases/findAspnetroles/FindAspnetrolesController";
import { CreateAspnetrolesController } from "./modules/aspnetroles/useCases/createAspnetroles/CreateAspnetrolesController";
import { PutAspnetrolesController } from "./modules/aspnetroles/useCases/putAspnetroles/PutAspnetrolesController";
import { DelAspnetrolesController } from "./modules/aspnetroles/useCases/delAspnetroles/DelAspnetrolesController";
import { FindAspnetuserController } from "./modules/aspnetuser/useCases/findAspnetuser/FindAspnetuserController";
import { CreateAspnetuserController } from "./modules/aspnetuser/useCases/createAspnetuser/CreateAspnetuserController";
import { PutAspnetuserController } from "./modules/aspnetuser/useCases/putAspnetuser/PutAspnetuserController";
import { DelAspnetuserController } from "./modules/aspnetuser/useCases/delAspnetuser/DelAspnetuserController";
import { FindFuncionarioController } from "./modules/funcionario/useCases/findFuncionario/FindFuncionarioController";
import { CreateFuncionarioController } from "./modules/funcionario/useCases/createFuncionario/CreateFuncionarioController";
import { PutFuncionarioController } from "./modules/funcionario/useCases/putFuncionario/PutFuncionarioController";
import { DelFuncionarioController } from "./modules/funcionario/useCases/delFuncionario/DelFuncionarioController";
import { FindProcedimentoController } from "./modules/procedimento/useCases/findProcedimento/FindProcedimentoController";
import { CreateProcedimentoController } from "./modules/procedimento/useCases/createProcedimento/CreateProcedimentoController";
import { PutProcedimentoController } from "./modules/procedimento/useCases/putProcedimento/PutProcedimentoController";
import { DelProcedimentoController } from "./modules/procedimento/useCases/delProcedimento/DelProcedimentoController";
import { FindProdutoController } from "./modules/produto/useCases/findProduto/FindProdutoController";
import { CreateProdutoController } from "./modules/produto/useCases/createProduto/CreateProdutoController";
import { PutProdutoController } from "./modules/produto/useCases/putProduto/PutProdutoController";
import { DelProdutoController } from "./modules/produto/useCases/delProduto/DelProdutoController";
import { FindAspnetuserroleController } from "./modules/aspnetuserroles/useCases/findAspnetuserrole/FindAspnetuserroleController";
import { CreateAspnetuserroleController } from "./modules/aspnetuserroles/useCases/createAspnetuserrole/CreateAspnetuserController";
import { PutAspnetuserroleController } from "./modules/aspnetuserroles/useCases/putAspnetuserrole/PutAspnetuserroleController";
import { DelAspnetuserroleController } from "./modules/aspnetuserroles/useCases/delAspnetuserrole/DelAspnetuserController";

const app = express()

app.use(express.json())

app.get("/cliente/find", new FindClienteController().handle)

app.post("/cliente/create", new CreateClienteController().handle)

app.put("/cliente/put", new PutClienteController().handle)

app.delete("/cliente/del", new DelClienteController().handle)


app.get("/funcionario/find", new FindFuncionarioController().handle)

app.post("/funcionario/create", new CreateFuncionarioController().handle)

app.put("/funcionario/put", new PutFuncionarioController().handle)

app.delete("/funcionario/del", new DelFuncionarioController().handle)


app.get("/procedimento/find", new FindProcedimentoController().handle)

app.post("/procedimento/create", new CreateProcedimentoController().handle)

app.put("/procedimento/put", new PutProcedimentoController().handle)

app.delete("/procedimento/del", new DelProcedimentoController().handle)


app.get("/produto/find", new FindProdutoController().handle)

app.post("/produto/create", new CreateProdutoController().handle)

app.put("/produto/put", new PutProdutoController().handle)

app.delete("/produto/del", new DelProdutoController().handle)


app.get("/aspnetuserrole/find", new FindAspnetuserroleController().handle)

app.post("/aspnetuserrole/create", new CreateAspnetuserroleController().handle)

app.put("/aspnetuserrole/put", new PutAspnetuserroleController().handle)

app.delete("/aspnetuserrole/del", new DelAspnetuserroleController().handle)



app.get("/aspnetroleclaims/find", new FindAspnetroleclaimsController().handle)

app.post("/aspnetroleclaims/create", new CreateAspnetroleclaimsController().handle)

app.put("/aspnetroleclaims/put", new PutAspnetroleclaimsController().handle)

app.delete("/aspnetroleclaims/del", new DelAspnetroleclaimsController().handle)


app.get("/aspnetuserclaims/find", new FindAspnetuserclaimsController().handle)

app.post("/aspnetuserclaims/create", new CreateAspnetuserclaimsController().handle)

app.put("/aspnetuserclaims/put", new PutAspnetuserclaimsController().handle)

app.delete("/aspnetuserclaims/del", new DelAspnetuserclaimsController().handle)


app.get("/aspnetroles/find", new FindAspnetrolesController().handle)

app.post("/aspnetroles/create", new CreateAspnetrolesController().handle)

app.put("/aspnetroles/put", new PutAspnetrolesController().handle)

app.delete("/aspnetroles/del", new DelAspnetrolesController().handle)


app.get("/aspnetuser/find", new FindAspnetuserController().handle)

app.post("/aspnetuser/create", new CreateAspnetuserController().handle)

app.put("/aspnetuser/put", new PutAspnetuserController().handle)

app.delete("/aspnetuser/del", new DelAspnetuserController().handle)



app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => {
  console.log("server is running")
})
