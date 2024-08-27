import React from "react";
import "./sidebar.css";
import IMG1 from "./img1.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
        
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={IMG1} alt="images" className="sidebarImage" />
        <p>
          Voluptate ex id mollit consequat dolore. Cillum elit magna laborum id
          non et anim qui voluptate enim proident magna Lorem sint. Proident
          commodo labore id nulla est voluptate sunt incididunt dolore ex. Qui
          reprehenderit laborum consectetur non ad anim minim est dolore sint.
          Non deserunt ad minim est est sint do eiusmod esse aute nulla
          deserunt. Est quis proident incididunt minim pariatur nisi dolor ea et
          ad tempor.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarLists">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <span className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon  fa-solid fa-x"></i>
          <i className="sidebarIcon   fa-brands fa-square-pinterest"></i>
          <i className=" sidebarIcon  fa-brands fa-square-instagram"></i>
        </span>
      </div>
    </div>
  );
}
