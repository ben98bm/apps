import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext";

const Logout = () => {
  const [error,setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
return(
    <>
    
        <Card>
            <Card.Body>
            {/* <h2 className="text-center mb-4">Profile</h2> */}
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
            </Link> */}
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button  onClick={handleLogout}>
            Log Out
            </Button>
        </div> 
   
    </>
)
}

export default Logout;
