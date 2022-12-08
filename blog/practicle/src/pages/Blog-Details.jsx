import React from "react";

//css
import "../css/article.css";

//components
import Navbar from "../components/Navbar";
import Details from "../components/blogs/Details";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid py-lg-5 py-md-0 bg-dark text-white hero-page">
        <div className="container py-lg-5 py-md-6">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <h1 className="text-sm-sm">
                Why clean design creates better experiences
              </h1>
              <div className="border border-3 border-light w-15 my-4"></div>
              <div className="d-flex align-items-center mb-4">
                <img
                  src="https://focus-theme.netlify.app/assets/img/tim-schoch.jpg"
                  className="avatar avatar-sm me-3"
                  alt="Tim Schoch"
                  width="1200"
                  height="800"
                />
                <div className="fst-italic small text-light">
                  by
                  <Link className="text-decoration-none text-white" to="#">
                    Tim Schoch
                  </Link>
                </div>
                <div className="small text-light ms-auto">
                  5 days ago | 5 min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Details />
      <Footer />
    </>
  );
};

export default BlogDetails;
