import { Router } from "express";
import {
    getAllProducts,
    searchProducts,
    getProductById,
    createProduct,
    deleteProduct
} from "../controllers/productsController.js";

const router = Router();

router.get("/products", getAllProducts);
router.get('/products/search', searchProducts);
router.get('/products/:id', getProductById);

router.post('/products', createProduct);
router.delete('/product', deleteProduct);

export default router;
