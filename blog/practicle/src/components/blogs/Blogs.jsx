import React from "react";
import { useState } from "react";
import { Label } from "reactstrap";

//css
import "../../css/card.css";
import "../../css/blogs.css";

//components
import Card from "./Card";

const Blogs = () => {
  const [filterInput, setFilterInput] = useState("");
  console.log(filterInput);
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

  const uniqueCategory = [...new Set(cardDetails.map((obj) => obj.category))];

  const dropDown = uniqueCategory.map((category, i) => (
    <option key={i} value={category}>
      {category}
    </option>
  ));

  return (
    <>
      <div className="bg-white text-black pb-5 pb-md-6">
        <div className="container py-2">
          <div id="html" className="row mt-6 article-card">
            <div className="p-2 filer-section ">
              <div className="filter-data">
                <Label for="exampleSelect" className="text-white">
                  Filter
                </Label>
                <select
                  onChange={(e) => setFilterInput(e.target.value)}
                  className="width text-uppercase"
                >
                  {dropDown}
                </select>
              </div>
            </div>
            <Card cardDetails={cardDetails} filterInput={filterInput} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
