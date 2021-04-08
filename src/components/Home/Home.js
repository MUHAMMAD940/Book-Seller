import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SingleProduct from './SingleProduct';
import "./Home.css"
import { CircularProgress } from '@material-ui/core';

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://immense-waters-73433.herokuapp.com/getProducts")
        .then(response =>response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                 <div className="products">
                    {
                        products.length === 0 && <CircularProgress color="secondary" className="spinner-control" />
                    }
                </div>
                {products.map(product => <SingleProduct key={product._id} product={product} />)}
            </div>
        </div>
       
    );
};

export default Home;