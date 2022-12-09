//css
import "../css/home.css";

//components
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/Footer";

//redux
import { useDispatch, useSelector } from "react-redux";
import { filterBlog } from "../redux/reducers/blog/blogSlice";

const Home = () => {
  const allCategory = useSelector((state) => state.blog.allBlogs);
  const dispatch = useDispatch();

  const uniqueCategory = [...new Set(allCategory?.map((obj) => obj.category))];

  const dropDown = uniqueCategory.map((category, i) => (
    <option key={i} value={category}>
      {category}
    </option>
  ));

  const handleSelect = (e) => {
    dispatch(filterBlog(e.target.value));
  };

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
              <div className="filer-section ">
                <div className="filter-data">
                  <h4 className="text-white">Filter</h4>
                  <select
                    onChange={handleSelect}
                    className="width text-uppercase"
                  >
                    <option>Select</option>
                    {dropDown}
                  </select>
                </div>
              </div>
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
