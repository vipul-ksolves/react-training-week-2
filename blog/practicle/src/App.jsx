import "./App.css";
import { Routes, Route } from "react-router-dom";

//components

//pages
import Home from "./pages/Home";
import BlogDetails from "./pages/Blog-Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
