import { Role } from "@roles/entities/Role"
import { DataSource } from "typeorm"
import { CreateRolesTable1672841952352 } from "./migrations/1672841952352-CreateRolesTable"
import { CreateUsersTable1673805369207 } from "./migrations/1673805369207-CreateUsersTable"
import { AddRoleIdToUsersTable1673900380327 } from "./migrations/1673900380327-AddRoleIdToUsersTable"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1672841952352, CreateUsersTable1673805369207, AddRoleIdToUsersTable1673900380327],
})
