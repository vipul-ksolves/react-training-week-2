import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Update from "./pages/Update";
import AddNewBlog from "./pages/AddNewBlog";

//pages
import Home from "./pages/Home";
import BlogDetails from "./pages/Blog-Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<BlogDetails />} />
        <Route path="/addnew" element={<AddNewBlog />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
