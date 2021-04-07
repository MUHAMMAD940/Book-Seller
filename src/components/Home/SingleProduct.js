import React from 'react';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const SingleProduct = (props) => {
    const {name, imageURL, price } = props.product

    console.log(imageURL)

    return (
        <Card className="w-100">
    <img src={imageURL} className="img-fluid w-100"  alt=""/>
    <Card.Body className="d-flex flex-column p-2">
      <Card.Title>{name}</Card.Title>
      <div className="d-flex">
          <h3>${price}</h3>
          <button type="button" className="btn btn-primary">BUY NOW</button>
      </div>
    </Card.Body>
  </Card>
    );
};

export default SingleProduct;