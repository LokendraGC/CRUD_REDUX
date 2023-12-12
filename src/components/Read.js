import React, { useEffect, useState } from 'react'
import '../styles/Read.css'
import { useDispatch } from 'react-redux'
import { deleteUser, getUser } from '../features/gitUserSlice';
import { useSelector } from 'react-redux';
import View from './View';
import { Link } from 'react-router-dom';

const Read = () => {
   const dispatch = useDispatch();

   const { user, loading } = useSelector((state)=>state.app)

    const [id, setId] = useState();
    const [popUp,setpopUp] = useState(false);


    console.log(id)

   useEffect(() => {
     dispatch(getUser());
   }, [dispatch]);

   if(loading){
    return <h1>Loading...</h1>
   }
  return (
    <>
      {popUp && <View id={id} popUp={popUp} setpopUp={setpopUp} />}

      <div className={`${popUp ? "hide" : "main"}`}>
        <h3 className="tit">Your Information is Here</h3>
        <div className={`${popUp ? "hid" : "read_container"}`}>
          {user.map((item) => {
            return (
              <div className="cart" key={item.id}>
                <div className="cart_items">
                  <p className="cart_title">
                    <b>Title:</b> {item.name}
                  </p>
                  <p className="cart_title">
                    <b>Email:</b> {item.email}
                  </p>
                  <p className="cart_title">
                    <b>Password:</b> {item.password}
                  </p>
                  <p className="cart_title">
                    <b>Type:</b> {item.type}
                  </p>
                </div>
                <div className="options">
                  <p
                    className="opt"
                    onClick={() => [setId(item.id), setpopUp(true)]}
                  >
                    View
                  </p>
                  <Link className="opt" to={`/edit/${item.id}`}>Edit</Link>
                  
                  <p onClick={()=>dispatch(deleteUser(item.id))} className="delete">Delete</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Read