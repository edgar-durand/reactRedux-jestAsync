import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import ProductList from './components/product-list';
import { fetchProducts } from './features/products/productSlice';
import { fetchCategories } from './features/categories/categorySlice';
import { fetchDepartments } from './features/department/departmentSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NewProduct from './components/new-product-form';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchDepartments());
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <ProductList />
            </header>
          </Route>
          <Route exact path="/add">
            <NewProduct></NewProduct>
          </Route>
          <Route exact path="/edit/:id">
            <NewProduct></NewProduct>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
