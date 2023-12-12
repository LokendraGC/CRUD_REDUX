import React, { useState } from 'react'
import '../styles/Home.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/gitUserSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({})

  const getUserData = (e)=>{
    console.log(user)
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('user...',user);
    dispatch(createUser(user));
    navigate('/read');
  }


  return (
    <div className="home_Container">
      <p>Store Your Data</p>
      <form className="form_field" onSubmit={handleSubmit}>
       Title
        <input
          onChange={getUserData}
          className="input_fieldh"
          name="name"
          type="text"
          placeholder="title"
          required
        />
        Email
        <input
          onChange={getUserData}
          className="input_fieldh"
          name="email"
          type="email"
          placeholder="email"
          required
        />
        Password
        <input
          onChange={getUserData}
          className="input_fieldh"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <div className="radio">
          <p> Account Type</p>
          <input
            onChange={getUserData}
            className="input_fieldr"
            type="radio"
            id="dmat"
            name="type"
            value='Dmat'
            required
          />
          <label htmlFor="dmat">Dmat</label>

          <input
            onChange={getUserData}
            className="input_fieldr"
            type="radio"
            id="bank"
            name="type"
            value='Bank'
            required
          />
          <label htmlFor="bank">Bank</label>
          <input
            onChange={getUserData}
            className="input_fieldr"
            type="radio"
            id="esewa"
            name="type"
            value='eSewa'
            required
          />
          <label htmlFor="bank">eSewa</label>
          <input
            onChange={getUserData}
            className="input_fieldr"
            type="radio"
            id="others"
            name="type"
            value='others'
            required
          />
          <label htmlFor="bank">Others</label>
        </div>
        <button type="submit" className="submit"  >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home