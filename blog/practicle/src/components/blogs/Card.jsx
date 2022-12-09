import React from "react";
import { Link } from "react-router-dom";

//components
import TimeSince from "../../components/Time-Since";
import CalcRT from "../Calc-RT";

//redux
import { useDispatch, useSelector } from "react-redux";

const Card = ({ cardDetails, deleteCard }) => {
  const blogs = useSelector((state) => state.blog.allBlogs);
  // console.log(blogs);
  return (
    <>
      {blogs.map((card, index) => {
        return (
          <div className="col-md-6 mb-5 " key={index}>
            <div className="card border-0 img-rising mb-lg-5">
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
                  {TimeSince(new Date(Date.now() - parseInt(card.publishedAt)))}
                  ago | {CalcRT(card.body)} min read
                </div>
                <p className="card-text">{card.body}</p>
              </div>
            </div>
            <div className="mx-3 d-flex justify-content-between">
              <button
                onClick={() => deleteCard(card.id)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
              <button type="button" className="btn btn-info">
                Update
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
