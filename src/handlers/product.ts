import { Request, Response } from "express"
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order:[
                ['price','ASC']
            ],
            //attributes: {exclude: ['createdAt','updatedAt','availability']}
        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
    console.log(req.params.id)
    const { id } = req.params
    const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
    
    if(!product){
        return res.status(404).json({
            error: 'Product No Encontrado'
        })
    }

    res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req: Request, res: Response) => {

   try {
        const product = await Product.create(req.body)
        res.json({data: product})
   } catch (error) {
        console.log(error)
   }
}

export const updateProduct = async (req: Request, res: Response) => {

     const { id } = req.params
    const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
    
    if(!product){
        return res.status(404).json({
            error: 'Product No Encontrado'
        })
    }

    // Actualizar
    await product.update(req.body)
    await product.save()

    res.json({data: product})
}

export const updateAvailability = async (req: Request, res: Response) => {

     const { id } = req.params
    const product = await Product.findByPk(Array.isArray(id) ? id[0] : id)
    
    if(!product){
        return res.status(404).json({
            error: 'Product No Encontrado'
        })
    }

    // Actualizar
    product.availability = !product.dataValues.availability
    await product.save()

    res.json({data: product})
}