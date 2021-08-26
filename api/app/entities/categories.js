import { CATEGORIES } from "../db/mock-categories.js";

/**
 * Fetch all CATEGORIES from db 
 * @param {Request} req 
 * @param {Response} res 
 */
export function getAllCategories(req, res) {
    res.send(CATEGORIES);
}


/**
 * Create new Category in db and Return in Response
 * @param {Request} req 
 * @param {Response} res 
 */
export const createNewCategory = (req, res) => {
    const newCategory = { id: CATEGORIES.length + 1, ...req.body };
    CATEGORIES.push(newCategory);
    res.send(newCategory);
}


/**
 * Delete one by ID
 * @param {Request} req 
 * @param {Response} res 
 */
export const deleteCategory = (req, res) => {
    const { params: { id } } = req;
    const toDelete = CATEGORIES.find((cat) => cat.id === +id);
    if (toDelete) {
        const catIndex = CATEGORIES.findIndex((cat) => cat.id === +id)
        CATEGORIES.splice(catIndex, 1);
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
export const getCategory = (req, res) => {
    const { params: { id } } = req;
    const cat = CATEGORIES.find((cat) => cat.id === +id)
    if (cat)
        res.send(cat)
    else
        res.send({ message: `id ${id} Not Found.` })
}


/**
 * Update one by id and set new props coming in @Req.body 
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateCategory = (req, res) => {
    const { params: { id } } = req;
    const newProps = req.body;
    const cat = CATEGORIES.find((cat) => cat.id === +id)
    if (cat) {
        const index = CATEGORIES.findIndex((cat) => cat.id === +id)
        CATEGORIES[index] = {
            ...CATEGORIES[index],
            ...newProps
        };
        res.send(CATEGORIES[index])
    } else
        res.send({ message: `id ${id} Not Found.` })
}