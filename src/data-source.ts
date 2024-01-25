import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entity/User"
import { SessionEntity } from "./entity/Session"
import { AccountEntity } from "./entity/Account"
import { VerificationTokenEntity } from "./entity/VerificationToken"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: 3306,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [UserEntity, SessionEntity, AccountEntity, VerificationTokenEntity],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
})
