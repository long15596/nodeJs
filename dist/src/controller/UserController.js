"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.register = async (request, response) => {
            try {
                let user = await UserService_1.default.save(request.body);
                response.status(200).json(user);
            }
            catch (err) {
                response.status(400).json(err.message);
            }
        };
        this.login = async (request, response) => {
            try {
                let user = await UserService_1.default.login(request.body);
                response.status(200).json(user);
            }
            catch (err) {
                response.status(400).json(err.message);
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map