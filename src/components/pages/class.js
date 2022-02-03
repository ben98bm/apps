import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./main.css";
// import hello from "../../assets/hello.svg";
// import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import NotInterestedIcon from "@material-ui/icons/NotInterested";
// import PageviewIcon from "@material-ui/icons/Pageview";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
// // import { StateContext } from "../../context/StateContext";
// import ReportProblemIcon from "@material-ui/icons/ReportProblem";

const Class = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/Class");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/Class/${id}`);
    loadUsers();
  };

  return (
    
    <div className="container">
      <div className="py-4">
        <h1>List of classes</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name of the course</th>
              <th scope="col">Date of the Class</th>
              <th scope="col">course number</th>
              <th scope="col">Time of class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.Date}</td>
                <td>{user.NumberOfLesson}</td>
                <td>{user.TimeOfCourse}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/Class/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit-class/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
 );
 
};

export default Class;
