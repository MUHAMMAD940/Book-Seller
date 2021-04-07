import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import DataTable from './DataTable';

const ManageProduct = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://immense-waters-73433.herokuapp.com/getProducts")
        .then(response =>response.json())
        .then(data => setProducts(data))
    }, [products])

    return (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Price</th>
                  <th style={{textAlign: 'center'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    products.map(product => <DataTable key={product._id} product={product} />)
                }
              </tbody>
          </Table>
    );
};

export default ManageProduct;