import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categories/categorySlice';
import departmentReducer from '../features/department/departmentSlice';
import productReducer from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    department: departmentReducer
  },
});
