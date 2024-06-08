import "./App.css";
import AllRoutes from "./component/AllRoutes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
