import { createRoleController } from "@roles/useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";
import { showRoleController } from "@roles/useCases/showRole";
import { updateRoleController } from "@roles/useCases/updateRole";
import { deleteRoleController } from "@roles/useCases/deleteRole";
import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate'

const rolesRouter = Router();

rolesRouter.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
}), (request, response) => {
  return createRoleController.handle(request, response);
})

rolesRouter.get('/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    limit: Joi.number(),
    page: Joi.number()
  })
}), (request, response) => {
  return listRolesController.handle(request, response);
})

rolesRouter.get('/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
}), (request, response) => {
  return showRoleController.handle(request, response);
})

rolesRouter.put('/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
  })
}), (request, response) => {
  return updateRoleController.handle(request, response);
})

rolesRouter.delete('/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().uuid().required(),
  })
}), (request, response) => {
  return deleteRoleController.handle(request, response);
})

export { rolesRouter }
