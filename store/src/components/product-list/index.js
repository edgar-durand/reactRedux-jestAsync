import React from 'react';
import ProductCard from '../product-card';
import { selectProducts } from '../../features/products/productSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const products = useSelector(selectProducts);

    return (
        <>
            <div className="container">
                <img src="INFOR.jpg" alt="" />
                <div className="info">
                    <Link to="/add" className="btn-add" onClick={() => null}>add product</Link>
                    <h1 className="heading">Product List</h1>
                </div>  
            </div>

            <div className="container">
                {products.map((product, index) => (
                    <ProductCard key={`${index}-${product.id}`} product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductList