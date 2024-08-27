import React from "react";
import "./settings.css";
import Sidebar from "../../componets/sidebar/Sidebar";
import Img from "./img1.jpg";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={Img} alt="profile--picture" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label >Username</label>
          <input type="text" placeholder="Francesco"/>
          <label >E-mail</label>
          <input type="email" placeholder="francesco@gmail.com"/>
          <label >Password</label>
          <input type="password"/>
          <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
