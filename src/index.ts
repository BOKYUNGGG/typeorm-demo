import { AppDataSource } from "./data-source"


AppDataSource.initialize().then(async (app) => {
    console.log('run migrations')
    await app.runMigrations()
    
    
    
    
    console.log('Close Connection')
    await app.destroy()
}).catch(error => {
    console.log('================================')
    console.log(error)
    console.log('================================')
})