import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const styles = {
    p: {
      color: "#3A98B9",
      fontSize: "25px",
      textTransform: "uppercase",
      textAlign: "center",
      },
      container: {
        display: 'flex',
        justifyContent: 'center',
      },
    Button: {
      margin: "10px 5px",
      padding: "10px 25px",
    },
  };

  const navigate = useNavigate("/fetch");
  const handleFetchClick = () => {
    navigate("/fetch");
  };
  const handleAxiosClick = () => {
    navigate("/axios");
  };
  return (
    <>
      <p style={styles.p}>Learning Restful Apis</p>
      <div className="container" style={styles.container}>
        <Button
          style={styles.Button}
          variant="primary"
          onClick={handleFetchClick}
        >
          Fetch
        </Button>
        <Button
          style={styles.Button}
          variant="secondary"
          onClick={handleAxiosClick}
        >
          Axious
        </Button>
      </div>
    </>
  );
};

export default Home;
