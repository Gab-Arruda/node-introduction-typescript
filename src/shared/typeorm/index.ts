import { Role } from "@roles/entities/Role"
import { DataSource } from "typeorm"
import { CreateRolesTable1672841952352 } from "./migrations/1672841952352-CreateRolesTable"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1672841952352],
})
