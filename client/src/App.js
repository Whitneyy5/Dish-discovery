import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipes from "./pages/Recipes";
import JollofRice from "./pages/JollofRice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/recipes"} element={<Recipes />} />
          <Route path={"/JollofRice"} element={<JollofRice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
