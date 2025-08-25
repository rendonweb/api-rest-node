import { Router } from "express";
import {
    getAllProducts,
    searchProducts,
    getProductById
} from "../controllers/productsController.js";

const router = Router();

router.get("/products", getAllProducts);
router.get('/products/search', searchProducts);
router.get('/products/:id', getProductById);

export default router;
