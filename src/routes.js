import { Router } from "express";
import SessionController from "./controllers/SessionController";
import VpdController from "./controllers/VpdController";
import multer from "multer";
import uploadConfig from "./config/upload";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post("/sessions", upload.single("photo"), SessionController.store);
routes.get("/vpdCelsius", VpdController.index);
export default routes;
