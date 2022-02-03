import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
// import { Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../../contexts/AuthContext";


const Navbar = () => {
  // const [error,setError] = useState("")
  // const { currentUser, logout } = useAuth()
  // const history = useHistory()

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/login")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }
    

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Learner">
                List of Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Professor">
                List of professors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Class">
                Liste of classes
              </NavLink>
            </li>
          </ul>
          {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
        </div>

        <Link className="btn btn-outline-light" to="/users/add-learner">Add Student</Link>
        <Link className="btn btn-outline-light" to="/users/add-professor">Add Professor</Link>
        <Link className="btn btn-outline-light" to="/users/add-class">Add Class</Link>
        <Link className="btn btn-inline-light" to="/logout" >Logout</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
