import React from "react";
import "./index.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New user</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="newUserItem">
          <label>E-Mail</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+62 1235 5676 8921" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="NewYork | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="other" id="male" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
