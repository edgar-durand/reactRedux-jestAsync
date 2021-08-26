import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, updateProduct } from '../../features/products/productSlice';
import { useParams } from "react-router";

const NewProduct = ({ updateProduct, addProduct, departments, categories, products }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [state, setState] = useState({ name: null, departmentId: null, categoryId: null, cost: null });

    useEffect(() => {      
        if (id) {
            const prod = products?.find(product => product.id === +id);
            setProduct(prod);
            setState({
                name: prod?.name,
                departmentId: prod?.department.id,
                categoryId: prod?.category.id,
                cost: prod?.cost
            });
        }
    }, [id, products])

    const depCategories = categories.filter(category => category.departmentId === +state.departmentId);
    const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });
    const handleClick = () => {
        if (id) {
            // then update
            if (state.name && state.departmentId &&
                state.categoryId && state.cost) {
                updateProduct({...state, id: product.id});
                console.log('succeed');
            } else console.warn('some fields left');
        } else {
            // then add new
            if (state.name && state.departmentId &&
                state.categoryId && state.cost) {
                addProduct({...state});
                console.log('succeed');
            } else console.warn('some fields left');
        }

    }


    return (
        <div className="container">
            <div className="">
                <img className="img" src="/INFOR.jpg" alt="" />
            </div>
            <div className="form">
                <h1 className="heading">{id ? 'Edit product' : 'New product'}</h1>
                <div className="box">
                    <label>name: </label>
                    <input required name="name" type="text" onChange={(e) => handleChange(e)} placeholder={id ? product?.name : null} />
                </div>
                <div className="box">
                    <label>cost: </label>
                    <input required name="cost" type="number" onChange={(e) => handleChange(e)} placeholder={id ? product?.cost : null} />
                </div>
                <div className="box">
                    <label>department: </label>
                    <select required name="departmentId" onChange={(e) => handleChange(e)}>
                        {
                            id ?
                                <option value={product?.department.id}>{product?.department.name}</option>
                                :
                                <option value="">Select department</option>
                        }
                        {departments.map((department, index) => {
                            return <option key={`${index} - ${department.id}`} value={department.id}>{department.name}</option>
                        })}
                    </select>
                </div>
                <div className="box">
                    <label>category: </label>
                    <select required name="categoryId" onChange={(e) => handleChange(e)}>
                        {
                            id ?
                                <option value={product?.category.id}>{product?.category.name}</option>
                                :
                                <option value="">Select category</option>
                        }
                        {depCategories.map((category, index) => {
                            return <option key={`${index} - ${category.id}`} value={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <button type="button" className="btn-add" onClick={() => handleClick()}>{id ? 'Update' : 'Add'}</button>
                <Link to="/" className="btn-add">back</Link>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        categories: state.category.categories,
        departments: state.department.departments,
        products: state.product.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProduct: (id, toUpdate) => {
            dispatch(updateProduct(id, toUpdate))
        },
        addProduct: (product) => {
            dispatch(addProduct(product))
        }, 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)