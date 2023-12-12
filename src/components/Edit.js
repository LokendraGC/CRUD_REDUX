import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/gitUserSlice';

const Edit = () => {

   const [updatedData,setUpdatedData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const {id} = useParams();
   console.log(id)

   const {user,loading} = useSelector((state)=>state.app)
   console.log(user,loading)

    useEffect(()=>{
      if(id){
      const  singleUser = user.filter((ele)=>ele.id === id)
        console.log(singleUser)
        setUpdatedData(singleUser[0])
      }
    },[id,user])

    const newData = (e) => {
      if (e.target && e.target.name) {
        setUpdatedData({
          ...updatedData,
          [e.target.name]: e.target.value,
        });
      }
    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      setUpdatedData(dispatch(updateUser(updatedData)))
      navigate('/read')
    }


   console.log('updatedData',updatedData)
   if(loading){
    return <h1>Loading...</h1>
   }

  return (
    <>
      <div className="home_Container">
        <p>Edit Your Data</p>
        <form className="form_field" onSubmit={handleSubmit}>
          Title
          <input
           onChange={newData}
            className="input_fieldh"
            name="name"
            type="text"
            placeholder="title"
            required
            value={updatedData && updatedData.name}
          />
          Email
          <input
           onChange={newData}
            className="input_fieldh"
            name="email"
            type="email"
            placeholder="email"
            required
            value={updatedData && updatedData.email}
          />
          Password
          <input
           onChange={newData}
            className="input_fieldh"
            type="password"
            name="password"
            placeholder="password"
            required
            value={updatedData && updatedData.password}
          />
          <div className="radio">
            <p> Account Type</p>
            <input
             onChange={newData}
              className="input_fieldr"
              type="radio"
              id="dmat"
              name="type"
              value="Dmat"
              required
              checked={updatedData && updatedData.type === "Dmat"}
            />
            <label htmlFor="dmat">Dmat</label>

            <input
             onChange={newData}
              className="input_fieldr"
              type="radio"
              id="bank"
              name="type"
              value="Bank"
              required
              checked={updatedData && updatedData.type === "Bank"}
            />
            <label htmlFor="bank">Bank</label>
            <input
             onChange={newData}
              className="input_fieldr"
              type="radio"
              id="esewa"
              name="type"
              value="eSewa"
              required
              checked={updatedData && updatedData.type === "eSewa"}
            />
            <label htmlFor="bank">eSewa</label>
            <input
             onChange={newData}
              className="input_fieldr"
              type="radio"
              id="others"
              name="type"
              value="Others"
              required
              checked={updatedData && updatedData.type === "Others"}
            />
            <label htmlFor="bank">Others</label>
          </div>
          <button type="submit" className="submit">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit