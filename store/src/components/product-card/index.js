import PropTypes from "prop-types";
import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../features/products/productSlice";

const ProductCard = (props) => {
    const { product } = props;
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(deleteProduct(id));
    }

    return (
        <div className="box">
            <h1> $ {product.cost} </h1>
            <img className="img" src="assets/images/proteccion-de-datos_5350207_20210212150252.png" alt="" />
            <h3 className="h3"><Link to={`/edit/${product.id}`}>{product.name}</Link></h3>
            <p className="p">{`${product.department.name}  /  ${product.category.name}`}</p>
            <a href="#home" className="btn-delete" onClick={() => handleRemove(product.id)}>delete</a>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.any,
        department: PropTypes.any,
        name: PropTypes.string
    })
}

export default ProductCard