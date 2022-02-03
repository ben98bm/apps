import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewProfessor = () => {
  const [user, setUser] = useState({
    Name: "",
    Surname: "",
    Email: ""
    // TimeOfCourse: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/professor/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
      <li className="list-group-item">Name: {user.Name}</li>
        <li className="list-group-item">Surname: {user.Surname}</li>
        <li className="list-group-item">Email: {user.Email}</li>
        {/* <li className="list-group-item">Course Time: {user.TimeOfCourse}</li> */}
      </ul>
    </div>
  );
};

export default ViewProfessor;
