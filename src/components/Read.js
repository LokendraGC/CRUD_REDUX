import React, { useEffect, useState } from "react";
import "../styles/Read.css";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../features/gitUserSlice";
import { useSelector } from "react-redux";
import View from "./View";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const { user, loading, searchData } = useSelector((state) => state.app);

  const [checkedData, setCheckedData] = useState("");

  const [id, setId] = useState();
  const [popUp, setpopUp] = useState(false);

  console.log(id);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {popUp && <View id={id} popUp={popUp} setpopUp={setpopUp} />}

      <div className={`${popUp ? "hide" : "main"}`}>
        <h3 className="tit">Your Information is Here</h3>

        <div className="radio_btns">
          <input
            className="rdInput"
            type="radio"
            name="type"
            checked={checkedData ===""}
            onChange={(e) => setCheckedData(e.target.value)}
          />
          <label htmlFor="">All</label>
          <input
            className="rdInput"
            type="radio"
            name="type"
            value="Bank"
            onChange={(e) => setCheckedData(e.target.value)}
          />
          <label htmlFor="">Bank</label>
          <input
            className="rdInput"
            type="radio"
            name="type"
            value="Dmat"
            onChange={(e) => setCheckedData(e.target.value)}
          />
          <label htmlFor="">Dmat</label>
          <input
            className="rdInput"
            type="radio"
            name="type"
            value="eSewa"
            onChange={(e) => setCheckedData(e.target.value)}
          />
          <label htmlFor="">eSewa</label>
          <input
            className="rdInput"
            type="radio"
            name="type"
            value="Others"
            onChange={(e) => setCheckedData(e.target.value)}
          />
          <label htmlFor="">Others</label>
        </div>

        <div className={`${popUp ? "hid" : "read_container"}`}>
          {user &&
            user
              .filter((ele) =>
                ele.name.toLowerCase().includes(searchData.toLowerCase())
              )

              .filter((radio) => {
                if (checkedData === "Dmat") {
                  return radio.type === checkedData;
                } else if (checkedData === "Bank") {
                  return radio.type === checkedData;
                } else if (checkedData === "eSewa") {
                  return radio.type === checkedData;
                } else if (checkedData === "Others") {
                  return radio.type === checkedData;
                } else{
                  return radio;
                }
              })

              .map((item) => {
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
                      <Link className="opt" to={`/edit/${item.id}`}>
                        Edit
                      </Link>

                      <p
                        onClick={() => {
                           const userConfirmed = window.confirm(
                             "Do you want to delete this item?"
                           );
                           if (userConfirmed) {
                             dispatch(deleteUser(item.id));
                           }
              
                          
                        }}
                        className="delete"
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Read;
