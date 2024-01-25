require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"



export const AppDataSource = new DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'workbench',
    password: process.env.PASSWORD,
    database: 'workbench',
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
    extra : {
        insecureAuth : true
    }
})