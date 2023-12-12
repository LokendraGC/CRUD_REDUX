import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const allUser = useSelector(state=>state.app.user)
  console.log(allUser);

  return (
    <div className="container">
      <div className="items">
        
        <ul className="links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/read">All Information({allUser.length})</Link>
        </ul>

        <form className="nav">
          <input className="input_field" type="text" placeholder="search" />
        </form>

      </div>
    </div>
  );
};

export default Navbar;
