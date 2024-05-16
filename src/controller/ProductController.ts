import productService from "../service/ProductService";
class ProductController {
    findAll = async (req, res) => {
        let list = await productService.findAll();
        res.json(list);
    }
    save = async (request, response) => {
        let data = await productService.save(request.body);
        response.json(data);
    }
    update = async (request, response) => {
        let data = await productService.update(request.params.id, request.body)
        response.json(data)
    }
    findById = async (request, response) => {
        let data = await productService.findById(request.params.id)
        response.json(data)
    }
}

export default new ProductController();