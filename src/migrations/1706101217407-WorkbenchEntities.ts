import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class WorkbenchEntities1706101217407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create User Table
        await queryRunner.createTable(
            new Table({
            name : 'User',
            columns : [
                {
                    name : "id",
                    type : 'varchar',
                    length : '36',
                    generationStrategy : 'uuid',
                    isPrimary : true,
                    isUnique : true,
                    isNullable : false
                },
                {
                    name : 'username',
                    type : 'varchar',
                    isNullable : false
                },
                {
                    name : 'password',
                    type : 'varchar',
                    isNullable : false
                }
            ]
            }),
            true
        )
        // Create Account Table
        await queryRunner.createTable(
            new Table({
                name : 'Account',
                columns : [
                    {
                        name : "id",
                        type : 'varchar',
                        generationStrategy : 'uuid',
                        length : '36',
                        isPrimary : true,
                        isUnique : true,
                        isNullable : false
                    },
                    {
                        name : 'userId',
                        type : 'varchar',
                        length : '36',
                    },
                    {
                        name : 'type',
                        type : 'varchar',
                    },
                    {
                        name : 'provider',
                        type : 'varchar',
                    },
                    {
                        name : 'providerAccountId',
                        type : 'varchar',
                    },
                    {
                        name : 'refresh_token',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'access_token',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'expires_at',
                        type : 'bigint',
                        isNullable : true
                    },
                    {
                        name : 'token_type',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'scope',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'id_token',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'session_state',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'oauth_token_secret',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'oauth_token',
                        type : 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'user',
                        type : 'varchar',
                        length : '36'
                    }
                ]
            }),
            true
        )
        // Create Session Table
        await queryRunner.createTable(
            new Table({
                name : 'Session',
                columns : [
                    {
                        name : 'id',
                        type : 'varchar',
                        length : '36',
                        generationStrategy : 'uuid',
                        isPrimary : true,
                        isUnique : true,
                        isNullable : false
                    },
                    {
                        name : 'sessionToken',
                        type : 'varchar',
                        isUnique : true
                    },
                    {
                        name : 'userId',
                        type : 'varchar',
                        length : '36'
                    },
                    {
                        name : 'expires',
                        type : 'varchar'
                    },
                    {
                        name : 'user',
                        type : 'varchar',
                        length : '36'
                    }
                ]
            }),
            true
        )

        // Create ForeignKey
        await queryRunner.createForeignKey(
            'Account',
            new TableForeignKey({
                columnNames : ['user'],
                referencedColumnNames : ['id'],
                referencedTableName : 'User',
                onDelete : 'CASCADE',
                onUpdate : 'CASCADE'
            })
        )
        await queryRunner.createForeignKey(
            'Session',
            new TableForeignKey({
                columnNames : ['user'],
                referencedColumnNames : ['id'],
                referencedTableName : 'User',
                onDelete : 'CASCADE',
                onUpdate : 'CASCADE'
            })
        )
        
    } // up

    public async down(queryRunner: QueryRunner): Promise<void> {
        const AccountTable = await queryRunner.getTable('Account')
        const SessionTable = await queryRunner.getTable('Session')
        const fk_account = AccountTable.foreignKeys.find(
            (fk)=>fk.columnNames.indexOf('user') !== -1
        )
        const fk_session = SessionTable.foreignKeys.find(
            (fk)=>fk.columnNames.indexOf('user') !== -1
        )

        await queryRunner.dropForeignKey('Session', fk_session)
        await queryRunner.dropForeignKey('Account', fk_account)
        await queryRunner.dropTable('User')
        await queryRunner.dropTable('Session')
        await queryRunner.dropTable('Account')
    }

}
