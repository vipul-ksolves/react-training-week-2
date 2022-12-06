import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="container py-3">
          <div className="bg-white mt-n5 mt-md-n6 px-3 px-md-0">
            <div className="row justify-content-center py-4 py-md-5">
              <div className="col-md-10 col-lg-8">
                <p className="fw-light fs-5">
                  This is a sample intro paragraph and can be used to introduce
                  readers to your article. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <h2>Use negative space</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  <Link className="text-black" to="#">
                    occaecat cupidatat
                  </Link>
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.
                </p>
                <figure className="figure mt-2">
                  <img
                    src="https://focus-theme.netlify.app/assets/img/book.jpg"
                    className="img-fluid"
                    alt="Book on top of white surface"
                  />
                  <figcaption className="figure-caption p-2 text-center">
                    This is a caption
                  </figcaption>
                </figure>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <figure className="ms-5">
                  <blockquote className="blockquote">
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      integer posuere erat a ante.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer text-muted mt-n2">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <hr className="bg-muted my-4" />
                <h3 className="visually-hidden">Tags</h3>
                <Link
                  href="#"
                  className="btn btn-sm btn-outline-dark me-2 mb-3"
                >
                  Design
                </Link>
                <Link href="#" className="btn btn-sm btn-outline-dark mb-3">
                  Minimalism
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
