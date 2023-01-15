import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from "tsyringe";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { ListRolesController } from "@roles/useCases/listRoles/ListRolesController";
import { ShowRoleController } from "@roles/useCases/showRole/ShowRoleController";
import { UpdateRoleController } from "@roles/useCases/updateRole/UpdateRoleController";
import { DeleteRoleController } from "@roles/useCases/deleteRole/DeleteRoleController";

const rolesRouter = Router();
const createRoleController = container.resolve(CreateRoleController)
const listRolesController = container.resolve(ListRolesController)
const showRoleController = container.resolve(ShowRoleController)
const updateRoleController = container.resolve(UpdateRoleController)
const deleteRoleController = container.resolve(DeleteRoleController)

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
