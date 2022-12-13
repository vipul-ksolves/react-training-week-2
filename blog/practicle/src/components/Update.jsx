import React, { useState, memo } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalFooter,
  Label,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const Update = () => {
  let blogs = useSelector((state) => state.blog.allBlogs);
  const [modal, setModal] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    body: "",
    publishedAt: new Date(),
    category: "",
    isSponsored: "",
  });
  // const getOne = () => {
  //   blogs.filter((card) => card.category == `${action.payload}`);
  // };

  const toggle = () => {
    // getOne();
    setModal(!modal);
  };

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const uniqueCategory = [...new Set(blogs?.map((obj) => obj.category))];

  const dropDown = uniqueCategory.map((category, i) => (
    <option key={i} value={category}>
      {category}
    </option>
  ));

  const handleSelect = (e) => {
    // dispatch(filterBlog(e.target.value));
  };

  const submit = () => {
    setModal(!modal);
    // dispatch(createBlog(newBlog));
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Blog</ModalHeader>
        <div className="p-2">
          <Label for="exampleSelect">Catagory</Label>

          <select onChange={handleSelect} className="width text-uppercase">
            <option>All</option>
            {dropDown}
          </select>
        </div>
        <div className="p-2">
          <Label for="exampleSelect">Sponsored</Label>
          <Input onChange={handleChange} name="isSponsored" type="select">
            <option>Select</option>
            <option>True</option>
            <option>False</option>
          </Input>
        </div>
        <div className="p-2">
          <Label for="newImage">Image</Label>
          <Input
            onChange={handleChange}
            name="image"
            placeholder="Enter Image url ...."
            type="text"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Title</Label>
          <Input
            onChange={handleChange}
            name="title"
            placeholder="Title..."
            type="text"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Description</Label>
          <Input
            onChange={handleChange}
            name="body"
            placeholder="Description...."
            type="textarea"
          />
        </div>

        <ModalFooter>
          <Button color="primary" onClick={submit}>
            Update Post
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default memo(Update);
