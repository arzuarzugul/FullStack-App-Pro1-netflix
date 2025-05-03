import React, { useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from "react-router-dom";

const Navbar = () => {
    const[isScrolled,setIsScrolled]=useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true);
        return ()=>(window.onscroll=null)
    }
  return (
    <div className={isScrolled? "navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>my List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon"/>
          <span>KId</span>
          <NotificationsIcon className="icon"/>
        <Link to="/login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFHquyvY44s4-5reLOPQIIAKcWea2Z2yPOblMk6OWC4gGt_Kw5FXlmjY&s" alt="" />
        </Link>
         <div className="profile">
         <ArrowDownwardIcon className="icon"/>
         <div className="options">
            <span>Setting</span>
            <span>Logout</span>
         </div>
         </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
