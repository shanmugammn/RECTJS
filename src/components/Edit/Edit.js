import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

import { useState } from "react";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(user[0].name);
  const [LastName, setLastName] = useState(user[0].LastName);
  const [Address, setAddress] = useState(user[0].Address);
  const [PhoneNumber,setPhoneNumber] = useState(user[0].PhoneNumber);
  

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
  };

  const editLastName = (e) => {
    setLastName(e.target.value);
    const edited_LastName = LastName;
    user[0].LastName = edited_LastName;
  };

  const editAddress = (e) => {
    setAddress(e.target.value);
    const edited_Address = Address;
    user[0].Address= edited_Address;
  };


  const editPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    const edited_PhoneNumber = PhoneNumber;
    user[0].PhoneNumber= edited_PhoneNumber;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={user[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            name="LastName"
             value={LastName}
            onChange={editLastName}
            placeholder={user[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="Address"
            value={Address}
            onChange={editAddress}
            placeholder={user[0].salary}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            type="text"
            name="PhoneNmuber"
            value={PhoneNumber}
            onChange={editPhoneNumber}
            placeholder={user[0].PhoneNumber}
          />
        </Form.Group>
        <Link to="/">
          <Button onSubmit={()=>editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;

