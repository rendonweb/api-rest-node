import * as Model from "../models/Product.js";

export const getAllProducts = async (req, res) => {
    const {category} = req.query;
    let products = await Model.getAllProducts();

    if (category) products = filterProductsByCategory(category);

    res.json(products);
}

const filterProductsByCategory = (category) => (
     Model.getAllProducts().filter(item => item.category.includes(category))
);

export const searchProducts = (req, res) => {
    const {name} = req.query;
    let products = Model.getAllProducts();

    if (!name) {
        res.status(400).json({error: 'El nombre es requerido'});
        return;
    }

    const productsFiltered = products.filter(item => 
        item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    if (!productsFiltered){
        return res.status(404).json({error: 'No se encontraron productos'});
    }

    res.json(productsFiltered);
}

export const getProductById = async (req, res) => {
    const product = await Model.getProductById(req.params.id);

    if (!product) {
        res.status(404).json({error: "No existe el producto"});
    }

    res.json(product);
}

export const createProduct = async (req, res) => {
    const {name, price, category} = req.body;
    const product = await Model.createProduct({name, price, category});
    res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const deleted = Model.deleteProduct(id);

    if(! deleted) {
        return res.status(404).json({error: 'Producto no encontrado'});
    }

    res.status(204).send();
};
