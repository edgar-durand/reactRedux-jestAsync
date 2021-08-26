import * as bodyParser from 'body-parser';
import express, { response } from 'express';
import { createNewProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from './app/entities/products.js';
import { createNewCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from './app/entities/categories.js';
import { createNewDepartment, deleteDepartment, getAllDepartments, getDepartment, updateDepartment } from './app/entities/department.js';
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const greeting = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

// PRODUCTS.....
app.route('/api/products')
  // GET ALL
  .get(getAllProducts)
  // CREATE ONE
  .post(createNewProduct)
// DELETE
app.route('/api/products/:id')
.delete(deleteProduct)
// GET ONE
.get(getProduct)
// UPDATE
.patch(updateProduct)

// CATEGORIES....
app.route('/api/categories')
  // GET ALL
  .get(getAllCategories)
  // CREATE ONE
  .post(createNewCategory)
// DELETE
app.delete('/api/categories/:id', deleteCategory);
// GET ONE
app.get('/api/categories/:id', getCategory);
// UPDATE
app.put('/api/categories/:id', updateCategory)

// DEPARTMENTS
app.route('/api/departments')
  // GET ALL
  .get(getAllDepartments)
  // CREATE ONE
  .post(createNewDepartment)
// DELETE
app.delete('/api/departments/:id', deleteDepartment);
// GET ONE
app.get('/api/departments/:id', getDepartment);
// UPDATE
app.put('/api/departments/:id', updateDepartment)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
