import categoryService from "../service/CategoryService";

class CategoryController {
    findAll = async (request, response) => {
        let list = await categoryService.findAll()
        response.json(list)
    }
}
export default new CategoryController();