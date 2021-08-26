import { DEPARTMENTS } from "../db/mock-departments.js";

/**
 * Fetch all DEPARTMENTS from db 
 * @param {Request} req 
 * @param {Response} res 
 */
export function getAllDepartments(req, res) {
    res.send(DEPARTMENTS);
}


/**
 * Create new DEPARTMENT in db and Return in Response
 * @param {Request} req 
 * @param {Response} res 
 */
export const createNewDepartment = (req, res) => {
    const newDepartment = { id: DEPARTMENTS.length + 1, ...req.body };
    DEPARTMENTS.push(newDepartment);
    res.send(newDepartment);
}


/**
 * Delete one by ID
 * @param {Request} req 
 * @param {Response} res 
 */
export const deleteDepartment = (req, res) => {
    const { params: { id } } = req;
    const toDelete = DEPARTMENTS.find((dep) => dep.id === +id);
    if (toDelete) {
        const depIndex = DEPARTMENTS.findIndex((dep) => dep.id === +id)
        DEPARTMENTS.splice(depIndex, 1);
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
export const getDepartment = (req, res) => {
    const { params: { id } } = req;
    const dep = DEPARTMENTS.find((dep) => dep.id === +id)
    if (dep)
        res.send(dep)
    else
        res.send({ message: `id ${id} Not Found.` })
}


/**
 * Update one by id and set new props coming in @Req.body 
 * @param {Request} req 
 * @param {Response} res 
 */
export const updateDepartment = (req, res) => {
    const { params: { id } } = req;
    const newProps = req.body;
    const dep = DEPARTMENTS.find((dep) => dep.id === +id)
    if (dep) {
        const index = DEPARTMENTS.findIndex((dep) => dep.id === +id)
        DEPARTMENTS[index] = {
            ...DEPARTMENTS[index],
            ...newProps
        };
        res.send(DEPARTMENTS[index])
    } else
        res.send({ message: `id ${id} Not Found.` })
}