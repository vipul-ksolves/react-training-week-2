import React from "react";
import { Link } from "react-router-dom";

//components
import TimeSince from "../../components/Time-Since";
import CalcRT from "../Calc-RT";

//redux
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../../redux/reducers/blog/blogSlice";

const Card = () => {
  let blogs = useSelector((state) => state.blog.allBlogs);
  const afterDelete = useSelector((state) => state.blog.deleteBlog);
  const afterFilter = useSelector((state) => state.blog.filteredBlog);
  console.log(afterFilter);

  if (afterDelete && afterDelete.length) {
    blogs = afterDelete;
  }
  if (afterFilter && afterFilter.length) {
    blogs = afterFilter;
  }

  const dispatch = useDispatch();

  // Delete card
  const deleteCard = (id) => {
    console.log(id);
    dispatch(deleteBlog(id));
  };
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
                    to={`/detail/${card.id}`}
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
