import { Router } from 'express'
import { createProduct, deleteProductById, getProductById, getProducts, updateProductById } from '../controllers/products.controller.js'
const router = Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)



export default router