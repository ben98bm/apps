import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    Date: "",
    NumberOfLessons: "",  
    TimeOfCourse: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/Class/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/Dashboard">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
      <li className="list-group-item">ame: {user.name}</li>
        <li className="list-group-item">Date of the Class: {user.Date}</li>
        <li className="list-group-item">course number: {user.NumberOfLesson}</li>
        <li className="list-group-item">Course Time: {user.TimeOfCourse}</li>
      </ul>
    </div>
  );
};

export default User;