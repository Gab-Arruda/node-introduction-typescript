import { Router } from "express";
import { rolesRouter } from "@roles/http/routes/roles.routes";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Olá devs" });
});

routes.use('/roles', rolesRouter);

export { routes }
