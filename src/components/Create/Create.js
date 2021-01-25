import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [users, setUser] = useContext(UserContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {id:id, name:name, LastName:LastName, Address:Address,PhoneNumber:PhoneNumber}])
  }

  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            name="LastName"
            value={LastName}
            onChange={updateLastName}
            placeholder="Enter LastName"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="Address"
            value={Address}
            onChange={updateAddress}
            placeholder="Enter Address"
          />
        </Form.Group>

       
        <Form.Group>
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            type="text"
            name="PhoenNumber"
            value={PhoneNumber}
            onChange={updatePhoneNumber}
            placeholder="Enter PhoneNumber"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;