import React from 'react'
import '../styles/View.css'
import { useSelector } from 'react-redux';

const View = ({ id, popUp, setpopUp}) => {

    const allUser = useSelector(state=>state.app.user)

    console.log("view",allUser)
    console.log('id',id)

    const singleUser = allUser.filter((ele)=>ele.id === id)

    console.log('vv',singleUser)
    
  return (
    <div className={`view_container`}>
      <div className="view_cart">
        <button className='close_btn' onClick={()=>setpopUp(false)}>close</button>
        
        <p className='view_item'><b>Title:</b> {singleUser[0].name}</p>
        <p className='view_item'><b>Email:</b> {singleUser[0].email}</p>
        <p className='view_item'><b>Password:</b> {singleUser[0].password}</p>
        <p className='view_item'><b>Type: </b> {singleUser[0].type}</p>
      </div>
    </div>
  );
};

export default View