import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../features/gitUserSlice";

const Navbar = () => {

  const allUser = useSelector(state=>state.app.user)
  console.log(allUser);

  const dispatch = useDispatch();


   const [searchUser, setSearchUser] = useState("");

   useEffect(() => {
    dispatch(searchData(searchUser))
    console.log(searchUser)
  }, [searchUser]);

  return (
    <div className="container">
      <div className="items">
        
        <ul className="links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/read">All Information({allUser.length})</Link>
        </ul>

        <form className="nav">
          <input className="input_field" type="text" placeholder="search" onChange={(e)=>setSearchUser(e.target.value)}/>
        </form>

      </div>
    </div>
  );
};

export default Navbar;
