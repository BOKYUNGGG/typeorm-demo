import { UserEntity } from "../entity/User"
import { AppDataSource } from "../data-source"


// 유저 생성
export async function createUser(username : string, password : string){
    const userRepository = AppDataSource.getRepository(UserEntity)
    const user = userRepository.create({username, password})
    return userRepository.save(user)
}

// username column으로 유저 조회
export async function findUserByUsername(username : string){
    const userRepository = AppDataSource.getRepository(UserEntity)
    return userRepository.findOne({where : {username}})
}

// 패스워드 확인
export async function verifyPassword(username : string, password : string){
    const user = await findUserByUsername(username)
    return user ? user.password === password : false
}

// 유저 삭제(회원탈퇴)
export async function deleteUser(userId : string) : Promise<void>{
    const userRepository = AppDataSource.getRepository(UserEntity)
    await userRepository.delete(userId)
}

// 유저데이터 업데이트
export async function updateUser(
    id : string, updatedUserData : Partial<UserEntity>
) : Promise<UserEntity | null>{
    const userRepository = AppDataSource.getRepository(UserEntity)
    const user = await userRepository.findOne({where : {id}})
    if(user){
        Object.assign(user, updatedUserData)
        return userRepository.save(user)
    }
}