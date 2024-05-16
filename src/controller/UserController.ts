import userService from "../service/UserService";

class UserController {
    register = async (request, response) => {
        try {
            let user = await userService.save(request.body)
            response.status(200).json(user)
        } catch (err) {
            response.status(400).json(err.message)
        }
    }
    login = async (request, response) => {
        try {
            let user = await userService.login(request.body)
            response.status(200).json(user)
        } catch (err) {
            response.status(400).json(err.message)
        }
    }
}
export default new UserController()