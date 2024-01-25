import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    ValueTransformer,
  } from "typeorm"
import { SessionEntity } from "./Session"
import { AccountEntity } from "./Account"

const transformer: Record<"date" | "bigint", ValueTransformer> = {
    date: {
        from: (date: string | null) => date && new Date(parseInt(date, 10)),
        to: (date?: Date) => date?.valueOf().toString(),
    },
    bigint: {
        from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
        to: (bigInt?: number) => bigInt?.toString(),
    },
}

@Entity({name : "User"})
export class UserEntity {
@PrimaryGeneratedColumn("uuid")
id: string

@Column({ type: "varchar", length : 255, unique : true})
username: string 

@Column({ type: "varchar"})
password: string

@OneToMany(() => SessionEntity, (session) => session.userId)
sessions!: SessionEntity[]

@OneToMany(() => AccountEntity, (account) => account.userId)
accounts!: AccountEntity[]
}