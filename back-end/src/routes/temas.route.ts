import { Router } from "express";
import { TemasController } from "../controllers/temas.controllers";

const router = Router();
const temasController = new TemasController();

router.get("/query", temasController.getByQuery);
router.get("/:id", temasController.getById);
router.get("/", temasController.get);



export default router;








