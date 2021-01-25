import React from "react";
import './Home.css';
import {useContext} from "react";
import { Button,Table } from "react-bootstrap";
import  {UserContext} from "../UserContext/UserContext";
import { Link } from "react-router-dom";

const Home = ()=>
{
    const[users,setUsers]=useContext(UserContext);
    console.log(users);
    return(
       
            <div>
                <Link to="/create">
           <Button variant="primary" >Add user</Button>
           </Link>
           
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.No</th>
      <th> FirstName</th>
      <th>LastName</th>
      <th>street</th>
      <th>PhoneNumber</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map(user=>

            <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.LastName}</td>
            <td>{user.Address}</td>
            <td>{user.PhoneNumber}</td>
            <td>
                <Link to={"/read/"+user.id}>
                <Button className="action_btn" variant="success">View</Button>
                </Link>
                <Link to={"/edit/"+user.id}>
           <Button className="action_btn" variant="info">Edit</Button>
           </Link>
           <Link to={"/delete/"+user.id}>
           <Button className="action_btn" variant="danger">Delete</Button>
           </Link>
           </td>
           
          </tr>)
      }

  </tbody>
</Table>
        </div>
    )
}
export default Home;