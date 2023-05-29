import { Router } from "express";
import {escolherPassagem } from "../controllers/voos.controllers.js"

const vooRouter = Router();

vooRouter.get("/voo/cidade/:name");
vooRouter.get("/voo/:id");
vooRouter.post("/voo", escolherPassagem);

export default vooRouter;