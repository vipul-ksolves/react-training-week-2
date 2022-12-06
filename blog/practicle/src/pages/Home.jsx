import React from "react";

//css
import "../css/home.css";

//components
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid py-5 py-md-6 bg-dark text-white hero-page">
          <div className="container">
            <div className="d-flex flex-row-reverse">
              <Modal />
            </div>
            <h1 className="display-1">Blog</h1>

            <div className="col-lg-8">
              <p className="lead text-light display-6 mb-6">
                This is what we are thinking about...
              </p>
            </div>
          </div>
        </div>
        <Blogs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
