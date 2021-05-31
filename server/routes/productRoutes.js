import express from 'express'
import asyncHandler from '../middleware/asyncMiddleware.js'
import Product from '../models/productModal.js'
import { errorInvalidCategory } from '../utils/errors.js'

const router = express.Router()

const categories = ['keyboard', 'mouse', 'headset']

router.get('/', asyncHandler(async (req, res, next) => {
    const products = await Product.find().lean()

    res.status(200).json({ status: 'success', data: products })
}))

router.get('/:category', asyncHandler(async (req, res, next) => {
    //in url, category is plural, make singular
    const category = req.params.category === 'mice'
        ? 'mouse'
        : req.params.category.slice(0, -1)

    if (!categories.includes(category))
        return next(errorInvalidCategory())

    const products = await Product.find({ category }).lean()

    res.status(200).json({ status: 'success', data: products })
}))

router.get('/:category/:id', asyncHandler(async (req, res, next) => {
    const productId = req.params.id

    const product = await Product.findById(productId).lean()

    res.status(200).json({ status: 'success', data: product })
}))

export default router
