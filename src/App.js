// import logo from './logo.svg';
// import './App.css';
import { Main } from "./components/home/main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApprovedMain } from "./components/approved/approved.jsx";
import { NavBar } from "./components/common/navbar.jsx";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/approved" element={<ApprovedMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
