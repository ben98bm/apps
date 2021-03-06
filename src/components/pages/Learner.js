import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Learner = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>List of Students</h1>
        <table class="table border shadow">
        <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Password</th> */}
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Name}</td>
                <td>{user.Surname}</td>
                <td>{user.Email}</td>
                {/* <td>{user.Password}</td> */}
                <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/users/edit-learner/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/users/edit-learner/${user.id}`}
                >
                  archive
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

export default Learner;
