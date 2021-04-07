import React from 'react';

const DataTable = props => {

  const {name, price, _id} = props.product
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                })
  }

    return (
        <tr>
        <td>{name}</td>

      <td>${price}</td>
      <td style={{textAlign: 'center'}}><button onClick={() => deleteProduct(_id)}>delete</button></td>
    </tr>
    );
};

export default DataTable;