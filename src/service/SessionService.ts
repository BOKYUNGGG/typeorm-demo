import { SessionEntity } from "../entity/Session";
import { AppDataSource } from "../data-source";
import { UserEntity } from "../entity/User";

export async function createSession({
    sessionToken,
    userId,
    expires,
    user
} : {
    sessionToken : string,
    userId : string,
    expires : string,
    user : UserEntity
}){
    const sessionRepository = AppDataSource.getRepository(SessionEntity)
    const session = sessionRepository.create({sessionToken,userId,expires,user})
    return sessionRepository.save(session)
}

export async function deleteSession(){

}

export async function renewSession(){
    
}