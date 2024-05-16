import {IService} from "./IService";
import User from "../entity/User";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SECRET} from "../middleware/authority";

class UserService implements IService<User>{
    private repository = AppDataSource.getRepository(User)
    findAll() {
        throw new Error("Method not implemented.");
    }
    save = async (data: User) => {
        let listUsername = await this.repository.findOne({where: {username: data.username}});
        if (listUsername) {
            throw new Error("Username Existed")
        }
        let user = data
        user.password = await bcrypt.hash(user.password, 10)
        return await this.repository.save(user)
    }
    update(id: number, data: User) {
        throw new Error("Method not implemented.");
    }
    findById(id: number) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    login = async (data) => {
        let user = data
        let userFind = await this.repository.findOne({where: {username: user.username}})
        if (userFind) {
            let checkPassword = await bcrypt.compare(user.password, userFind.password)
            if (checkPassword) {
                let payload = {
                    password: userFind.password
                }
                let secret = "Day La Cai Khoa"
                let token = jwt.sign(payload, SECRET, {
                    expiresIn: 3600
                })
                return {token, id : userFind.id, username: userFind.username}
            }
        } else {
            throw new Error(`User Not Existed`)
        }
    }
}
export default new UserService()