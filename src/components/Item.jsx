import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import './Item.css';

const Item = ({ title, price }) => {
  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item as="li" className="list">
          <span className="name">{title}</span>
          <span className="price">${price}</span>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Item;
