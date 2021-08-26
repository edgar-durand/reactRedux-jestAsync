import { mapProductToResponse } from "../helpers/map-products.js";
import { PRODUCTS } from "../db/mock-products.js";

/**
 * Fetch all products from db 
 * @param {Request} req 
 * @param {Response} res 
 */
export function getAllProducts(req, res) {
    res.send(PRODUCTS.map((product) => mapProductToResponse(product)));
}


/**
 * Create new Product in db and Return in Response
 * @param {Request} req 
 * @param {Response} res 
 */
export const createNewProduct = (req, res) => {
    const newProduct = { id: PRODUCTS.length + 1, ...req.body };
    PRODUCTS.push(newProduct);
    res.send(mapProductToResponse(newProduct));
}


/**
 * Delete one by ID
 * @param {Request} req 
 * @param {Response} res 
 */
export const deleteProduct = (req, res) => {
    const { params: { id } } = req;
    const toDelete = PRODUCTS.find((product) => product.id === +id);
    if (toDelete) {
        const productIndex = PRODUCTS.findIndex((product) => product.id === +id)
        PRODUCTS.splice(productIndex, 1);
        res.send({ result: "success" });
    } else {
        res.send({ message: "Not Found" });
    }
}


/**
 * Get one by ID
 * @param {Request} req 
 * @param {Response} res 
 */
export const getProduct = (req, res) => {
    const { params: { id } } = req;
    const product = PRODUCTS.find((product) => product.id === +id)
    if (product)
        res.send(mapProductToResponse(product))
    else
        res.send({ message: `id ${id} Not Found.` })
}


/**
 * Update one by id and set new props coming in @Req.body 
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateProduct = (req, res) => {
    const { params: { id } } = req;
    const newProps = req.body;
    console.log('req body..', newProps);
    const product = PRODUCTS.find((product) => product.id === +id)
    if (product) {
        const index = PRODUCTS.findIndex((product) => product.id === +id)
        PRODUCTS[index] = {
            ...PRODUCTS[index],
            ...newProps
        };
        res.send(mapProductToResponse(PRODUCTS[index]))
    } else
        res.send({ message: `id ${id} Not Found.` })
}