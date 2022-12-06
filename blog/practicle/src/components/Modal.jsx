import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  Input,
  ModalFooter,
  Label,
} from "reactstrap";

function ModalComponent(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add New
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add New Blog</ModalHeader>
        <div className="p-2">
          <Label for="exampleSelect">Catagory</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </div>
        <div className="p-2">
          <Label for="exampleSelect">Sponsored</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>True</option>
            <option>False</option>
          </Input>
        </div>
        <div className="p-2">
          <Label for="newImage">Image</Label>
          <Input
            id="newImage"
            name="text"
            placeholder="Image...."
            type="file"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Title</Label>
          <Input
            id="exampleEmail"
            name="text"
            placeholder="Title..."
            type="text"
          />
        </div>
        <div className="p-2">
          <Label for="exampleEmail">Description</Label>
          <Input
            id="exampleEmail"
            name="text"
            placeholder="Description...."
            type="textarea"
          />
        </div>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
