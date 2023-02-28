import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Fetch from "./components/Fetch";
import Axios from "./components/Axios";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fetch" exact element={<Fetch />} />
        <Route path="/axios" exact element={<Axios />} />
      </Routes>
    </>
  );
}

export default App;
