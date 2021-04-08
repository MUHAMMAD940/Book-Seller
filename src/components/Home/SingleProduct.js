import React from 'react';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import { Link } from 'react-router-dom';


const SingleProduct = (props) => {
    const {_id, name, imageURL, price } = props.product

    console.log(imageURL)

    return (
      <div className="col-lg-4 py-4 text-center">
        <div className="card h-100">
          <div className="card-body">
            <Card className="w-100">
              <img src={imageURL} className="img-fluid w-100"  alt=""/>
                <Card.Body className="d-flex flex-column p-2">
                  <Card.Title>{name}</Card.Title>
                  <div className="d-flex">
                      <h3>${price}</h3>
                      <Link to={`/checkout/${_id}`} className="btn btn-success">Buy Now</Link>
                      {/* <button type="button" className="btn btn-primary">BUY NOW</button> */}
                  </div>
                </Card.Body>
            </Card> 
            </div>
           </div>
        </div>
    );
};

export default SingleProduct;