import "./App.css";
// import Form from "./Form";
import Signup from "./Signup";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Chart from "./Chart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <div id="svg-item"></div>
    </div>
  );
}

export default App;
