import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/7208636/pexels-photo-7208636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10 12 1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+62 85731923719</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New york Usa</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Username..."
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Fullname</label>
                <input
                  type="text"
                  placeholder="Fullname..."
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">E-Mail</label>
                <input
                  type="email"
                  placeholder="E-Mail..."
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Phone</label>
                <input
                  type="text"
                  placeholder="Ex:0861231..."
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Address</label>
                <input
                  type="text"
                  placeholder="Ex:Jl.Kenangan..."
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/7208636/pexels-photo-7208636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
