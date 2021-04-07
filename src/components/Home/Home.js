import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SingleProduct from './SingleProduct';
import "./Home.css"

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
                <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="products">
                            {products.map(product => <SingleProduct key={product._id} product={product} />)}
                        </div>
                    </div>
                  </div>  
                </div>
            </div>
        </div>
       
    );
};

export default Home;