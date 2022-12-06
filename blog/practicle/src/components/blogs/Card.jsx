import React from "react";
import { Link } from "react-router-dom";
const Card = ({ cardDetails }) => {
  // console.log(cardDetails);
  return (
    <>
      {cardDetails.map((card, index) => {
        return (
          <div className="col-md-6" key={card.id}>
            <div className="card border-0 img-rising mb-4 mb-lg-5">
              <img
                src={card.image}
                className="card-img-top img-fluid"
                alt="Why clean design creates better experiences"
                width="640"
                height="400"
              ></img>
              <div className="card-body px-0">
                <div className="text-muted text-uppercase mb-2">
                  {card.category}
                </div>
                <h2 className="card-title h3">
                  <Link
                    to="/detail/4"
                    className="stretched-link text-decoration-none text-dark"
                  >
                    {card.title}
                  </Link>
                </h2>
                <div className="small text-muted mb-3">
                  5 days ago | 5 min read
                </div>
                <p className="card-text">{card.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
