//importando o require ou seja a requisiçaõ das rotas e busca pela especifica
const { Router } = require("express");


const UsersController = require ("../controllers/UsersController");

const usersRoutes = Router();

/*function myMiddleware(request, response, next){
  console.log("Você passou pelo Middleware");
  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"});
  };
  next();
}*/


const usersController = new UsersController();

//usersRoutes.use(myMiddleware);
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id",usersController.update);
//exportando as rotas
module.exports = usersRoutes;