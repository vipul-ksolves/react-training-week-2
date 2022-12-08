import React, { memo } from "react";

//css
import "../../css/card.css";
import "../../css/blogs.css";

//components
import Card from "./Card";

const Blogs = ({ cardDetails, setCardDetails, selectedBlogs }) => {
  if (selectedBlogs && selectedBlogs.length) {
    cardDetails = selectedBlogs;
  }

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
            <Card cardDetails={cardDetails} deleteCard={deleteCard} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Blogs);
