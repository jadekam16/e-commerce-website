import express from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

router.get( '/', getProducts );           // GET all products
router.get( '/:id', getProduct );         // GET a single product 
router.post( '/', createProduct );        // CREATE a new product
router.put( '/:id', updateProduct );      // UPDATE a product 
router.delete( '/:id', deleteProduct );   // DELETE a product 

export default router;