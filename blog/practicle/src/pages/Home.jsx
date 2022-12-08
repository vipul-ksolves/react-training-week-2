import React, { useState } from "react";

//css
import "../css/home.css";

//components
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/Footer";

const Home = () => {
  const [cardDetails, setCardDetails] = useState([
    {
      id: 1,
      title: "Why clean design creates better experiences",
      image: "https://focus-theme.netlify.app/assets/img/pencils.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-04-12T00:38:51.947Z",
      category: "travel",
      isSponsored: true,
    },
    {
      id: 2,
      title: "How to make origami for beginners",
      image: "https://focus-theme.netlify.app/assets/img/origami.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-05-03T00:38:51.947Z",
      category: "game",
      isSponsored: false,
    },
    {
      id: 3,
      title: "How to take better photos with your Canon DSLR",
      image: "https://focus-theme.netlify.app/assets/img/camera.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-07-22T00:38:51.947Z",
      category: "history",
      isSponsored: true,
    },
    {
      id: 4,
      title: "The world's 11 greatest modern buildings",
      image: "https://focus-theme.netlify.app/assets/img/building.jpg",
      body: "This is a sample intro paragraph and can be used to introduce readers to your article. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "2022-04-12T00:38:51.947Z",
      category: "travel",
      isSponsored: true,
    },
  ]);

  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid py-5 py-md-6 bg-dark text-white hero-page">
          <div className="container">
            <div className="d-flex flex-row-reverse">
              <Modal
                setCardDetails={setCardDetails}
                cardDetails={cardDetails}
              />
            </div>
            <h1 className="display-1">Blog</h1>

            <div className="col-lg-8">
              <p className="lead text-light display-6 mb-6">
                This is what we are thinking about...
              </p>
            </div>
          </div>
        </div>
        <Blogs cardDetails={cardDetails} setCardDetails={setCardDetails} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
