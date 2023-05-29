import { Router } from "express";
import cidadesRouter from "./cidades.routes.js";
import vooRouter from "./voos.routes.js";

const router = Router();

router.use(cidadesRouter);
router.use(vooRouter);

export default router;