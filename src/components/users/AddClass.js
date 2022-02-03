import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    Date: "",
    NumberOfLesson: "", 
    TimeOfCourse: "",
  });

  const { name, Date, NumberOfLesson, TimeOfCourse } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/Class", user);
    history.push("/Class");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Class</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="name"
              className="form-control form-control-lg"
              placeholder="Enter Course"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Date"
              className="form-control form-control-lg"
              placeholder="date"
              name="Date"
              value={Date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Lesson Number"
              name="NumberOfLesson"
              value={NumberOfLesson}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control form-control-lg"
              placeholder="Enter time of course"
              name="TimeOfCourse"
              value={TimeOfCourse}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
