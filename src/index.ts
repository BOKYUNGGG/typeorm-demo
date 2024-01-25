import { AppDataSource } from "./data-source"
import { UserEntity } from "./entity/User"
import * as userService from './service/UserService'
AppDataSource.initialize().then(async (app) => {
    console.log('run migrations')
    app.undoLastMigration()
    
    
    
    

}).catch(error => console.log(error))