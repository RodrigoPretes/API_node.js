//importando o require ou seja a requisiçaõ das rotas e busca pela especifica
const { Router } = require("express");


const TagsController = require ("../controllers/TagsController");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);


module.exports = tagsRoutes;