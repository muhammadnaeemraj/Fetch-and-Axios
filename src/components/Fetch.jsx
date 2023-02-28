import React, { useState, useEffect } from "react";
import Item from "./Item";
import Spinner from 'react-bootstrap/Spinner';

const Fetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const getMenuItems = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      const json = await response.json();
      setData(json.menu);
      console.log(json.menu);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMenuItems();
  }, []);

  const renderItems = () => {
    return data.map((i) => {
      return <Item key={i.id} title={i.title} price={i.price} />;
    });
  };

  return (
    <>
      <p style={{textAlign: 'center', fontSize: '25px', color: '#F0A04B', fontFamily: 'Lucida Console', textTransform: 'uppercase', position: 'sticky', top: '0px'}}>Working with Fetch Api</p>
      <div className="container">
        <h1 className="header">Little Lemon</h1>
        {loading ? <Spinner className="loader" animation="grow" variant="info" /> : renderItems()}
      </div>
    </>
  );
};

export default Fetch;
