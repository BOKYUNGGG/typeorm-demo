import { AppDataSource } from "./data-source"
import { UserEntity } from "./entity/User"
import * as userService from './service/UserService'
AppDataSource.initialize().then(async () => {

    console.log("Query start====================================")
    
    
    

}).catch(error => console.log(error))
