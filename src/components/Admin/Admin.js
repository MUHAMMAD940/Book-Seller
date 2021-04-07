import React, { useState } from 'react';
import AddProduct from './AddProduct';
import './Admin.css'
import ManageProduct from './ManageProduct';


const Admin = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    return (
        <section id="adminSection">
            <div className="sideNav">
                <h2>Book Seller</h2>
                <nav className="navBar">
                    <p> Manage Book</p>
                    <button onClick={() => setFormSubmit(true)}> Add Book</button>
                    <br></br>
                    <button onClick={() => setFormSubmit(false)}> Edit Book</button>
                </nav>
            </div>
            {
                formSubmit? 
                <AddProduct/>
                : 
                <ManageProduct/>
            }
        </section>
    );
};

export default Admin;