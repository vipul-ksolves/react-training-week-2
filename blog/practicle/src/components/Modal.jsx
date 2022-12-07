import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalFooter,
  Label,
} from "reactstrap";

const ModalComponent = () => {
  const [modal, setModal] = useState(false);
  // const [newBlog, setNewBlog] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add New
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Blog</ModalHeader>
        <div className="p-2">
          <Label for="exampleSelect">Catagory</Label>
          <Input
            onChange={handleChange}
            id="exampleSelect"
            name="select"
            type="select"
          >
            <option>Travel</option>
            <option>History</option>
            <option>Game</option>
          </Input>
        </div>
        <div className="p-2">
          <Label for="exampleSelect">Sponsored</Label>
          <Input onChange={handleChange} name="select" type="select">
            <option>True</option>
            <option>False</option>
          </Input>
        </div>
        <div className="p-2">
          <Label for="newImage">Image</Label>
          <Input
            id="newImage"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
            name="text"
            placeholder="Image...."
            type="file"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Title</Label>
          <Input
            onChange={handleChange}
            name="text"
            placeholder="Title..."
            type="text"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Description</Label>
          <Input
            onChange={handleChange}
            name="text"
            placeholder="Description...."
            type="textarea"
          />
        </div>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
