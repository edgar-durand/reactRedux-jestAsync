import { CATEGORIES, DEPARTMENTS } from "../db/index.js"

export const mapProductToResponse = (product) => {
    return {
        id: product.id,
        name: product.name,
        cost: product.cost,
        department: DEPARTMENTS.find(dep => dep.id === +product.departmentId),
        category: CATEGORIES.find(cat => cat.id === +product.categoryId),
    }
}