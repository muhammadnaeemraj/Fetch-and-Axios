import React, { useState, useEffect } from "react";
import Item from "./Item";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const Axios = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMenuItems = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      //   const json = await response.json();
      setData(response.data.menu);
      //   console.log(response.data);
      console.log(response.data.menu);
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
    if (!data) return null;
    return data.map((i) => {
      return <Item key={i.id} title={i.title} price={i.price} />;
    });
  };

  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "25px",
          color: "#F0A04B",
          fontFamily: "Lucida Console",
          textTransform: "uppercase",
          position: "sticky",
          top: "0px",
        }}
      >
        Working with Axios Api
      </p>
      <div className="container">
        <h1 className="header">Little Lemon</h1>
        {loading ? (
          <Spinner className="loader" animation="grow" variant="info" />
        ) : (
          renderItems()
        )}
      </div>
    </>
  );
};

export default Axios;
