import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddProfessor = () => {
  let history = useHistory();
  const [Professor, setUser] = useState({
    Name: "",
    Surname: "",
    Email: "",  
    // Password: "",
  });

  const { Name, Surname, Email, Password } = Professor;
  const onInputChange = e => {
    setUser({ ...Professor, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/professor", Professor);
    history.push("/Professor");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a professor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              name="Name"
              value={Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your surname"
              name="Surname"
              value={Surname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              name="Email"
              value={Email}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter times of studies"
              name="Password"
              value={Password}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <button className="btn btn-primary btn-block">Add Professor</button>
        </form>
      </div>
    </div>
  );
};

export default AddProfessor;
