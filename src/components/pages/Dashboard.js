import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./main.css"
import hello from "../../assets/hello.svg";
import PageviewIcon from "@material-ui/icons/Pageview";
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import Class from "./class";
// import  from '../../calendar.jsx';
import Calendar from "../../calendar.jsx";

// import Modal from "react-modal";


// Modal.setAppElement('#root')
const Dashboard = () => {
  const [courseCompleted, setCourseCompleted] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/Dashboard");
    setCourseCompleted(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/Dashboard/${id}`);
    loadUsers();
  };

  return (
    // <div className="container">
      <div className="py-4">
        
      <div className="main__title">
        <img src={hello} alt="hello" />
        <div className="main__greeting">
          <h1>Tableau de bord</h1>
          <p>School Management</p>
        </div>
      </div>
      <div className="main__cards">
        <div className="card1">
          <span className="text-lightblue">
            <MenuBookIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Completed Courses</p>
            <span className="font-bold text-title">7</span>
          </div>
        </div>
        <div className="card2">
          <span className="text-red" aria-hidden="true">
            <SchoolIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Number of Courses</p>
            <span className="font-bold text-title">10</span>
          </div>
        </div>
        <div className="card3">
          <span style={{ color: "orange" }} aria-hidden="true">
          <EmojiPeopleIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Number of Students</p>
            <span className="font-bold text-title">45</span>
          </div>
        </div>
        <div className="card4">
          <span style={{ color: "maroon" }} aria-hidden="true">
            <AssignmentIndIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Number of Professors</p>
            <span className="font-bold text-title">5</span>
          </div>
        </div>
        
        {/* <div className="card">
          <span className=" text-yellow">
            <NotificationsActiveIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Rappels Vidange </p>
            <span className="font-bold text-title">{}</span>
          </div>
        </div>

        <div className="card">
          <span className="text-red" aria-hidden="true">
            <NotificationsOffIcon className="icon-dashboard" />
          </span>
          <div className="card_inner">
            <p className="text-primary-p">Retards Vidange</p>
            <span className="font-bold text-title">{}</span>
          </div>
        </div> */}
      </div>
     <Calendar />
    </div>
 );
};

export default Dashboard;
