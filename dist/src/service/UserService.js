"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../entity/User"));
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authority_1 = require("../middleware/authority");
class UserService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(User_1.default);
        this.save = async (data) => {
            let listUsername = await this.repository.findOne({ where: { username: data.username } });
            if (listUsername) {
                throw new Error("Username Existed");
            }
            let user = data;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return await this.repository.save(user);
        };
        this.login = async (data) => {
            let user = data;
            let userFind = await this.repository.findOne({ where: { username: user.username } });
            if (userFind) {
                let checkPassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (checkPassword) {
                    let payload = {
                        password: userFind.password
                    };
                    let secret = "Day La Cai Khoa";
                    let token = jsonwebtoken_1.default.sign(payload, authority_1.SECRET, {
                        expiresIn: 3600
                    });
                    return { token, id: userFind.id, username: userFind.username };
                }
            }
            else {
                throw new Error(`User Not Existed`);
            }
        };
    }
    findAll() {
        throw new Error("Method not implemented.");
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map