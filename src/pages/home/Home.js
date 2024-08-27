import React from "react";
import "./Home.css";
import Header from "../../componets/header/Header";
import Posts from "../../componets/posts/Posts";
import Sidebar from "../../componets/sidebar/Sidebar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  );
}

export default Home;
