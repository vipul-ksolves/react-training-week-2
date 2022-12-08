import React from "react";
import { useState } from "react";
import { Label } from "reactstrap";

//css
import "../../css/card.css";
import "../../css/blogs.css";

//components
import Card from "./Card";

const Blogs = ({ cardDetails, setCardDetails }) => {
  const [filterInput, setFilterInput] = useState("");
  console.log(cardDetails);

  const uniqueCategory = [...new Set(cardDetails?.map((obj) => obj.category))];

  const dropDown = uniqueCategory.map((category, i) => (
    <option key={i} value={category}>
      {category}
    </option>
  ));

  // Delete task
  const deleteCard = (id) => {
    let newTasks = cardDetails.filter((card) => card.id !== id);
    setCardDetails(newTasks);
  };
  return (
    <>
      <div className="bg-white text-black pb-5 pb-md-6">
        <div className="container py-2">
          <div id="html" className="row mt-6 article-card">
            <div className="p-2 filer-section ">
              <div className="filter-data">
                <h4 className="text-white">Filter</h4>
                <select
                  onChange={(e) => setFilterInput(e.target.value)}
                  className="width text-uppercase"
                >
                  <option>All</option>
                  {dropDown}
                </select>
              </div>
            </div>
            <Card cardDetails={cardDetails} deleteCard={deleteCard} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
