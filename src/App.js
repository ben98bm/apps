import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Learner from "./components/pages/Learner";
import Professor from "./components/pages/professor";
import Class from "./components/pages/class";
import Navbar from "./components/layout/Navbar";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   withRouter
// } from "react-router-dom";
// import NotFound from "./components/pages/NotFound";
import AddLearner from "./components/users/AddLearner";
import AddClass from "./components/users/AddClass";
import AddProfessor from "./components/users/AddProfessor";
import EditLearner from "./components/users/EditLearner";
import EditClass from "./components/users/EditClass";
import EditProfessor from "./components/users/EditProfessor";
import ViewLearner from "./components/users/viewLearner";
import ViewProfessor from "./components/users/viewProfessors";
import ViewClass from "./components/users/viewClass";
import Dashboard from "./components/pages/Dashboard";
import logout from "././components/pages/logout";
import Modal from 'react-modal';
// import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "././contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import Signup from "./components/Signup";


Modal.setAppElement('#root')
// import UpdateProfile from "./components/UpdateProfile"
function App(props) {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="App">
      <Router>
       
          <Navbar />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
              <PrivateRoute exact path="/Learner" component={Learner} />
              <PrivateRoute exact path="/Professor" component={Professor} />
              <PrivateRoute exact path="/Class" component={Class} />
              <PrivateRoute exact path="/users/add-learner" component={AddLearner} />
              <PrivateRoute exact path="/users/add-professor" component={AddProfessor} />
              <PrivateRoute exact path="/users/add-class" component={AddClass} />
              <PrivateRoute exact path="/users/edit-learner/:id" component={EditLearner} />
              <PrivateRoute exact path="/users/edit-professor/:id" component={EditProfessor} />
              <PrivateRoute exact path="/users/edit-class/:id" component={EditClass} />
              <PrivateRoute exact path="/users/:id" component={ViewLearner} />
              <PrivateRoute exact path="/professor/:id" component={ViewProfessor} />
              <PrivateRoute exact path="/Class/:id" component={ViewClass} />
              <PrivateRoute exact path="/logout" component={logout} />
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
      
      </Router>
    </div>
  );
}

export default App;
