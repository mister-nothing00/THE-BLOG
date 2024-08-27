import React from "react";
import "./singlePost.css";
import Img from "./img1.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={Img} alt="cover--image" className="singlePostImg" />
        <h1 className="singlePostTitle">
          BALU BALU
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Francesco</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Aliquip eu tempor mollit tempor commodo in consequat elit. Aliquip
          dolor Lorem et laborum enim est irure anim culpa cupidatat veniam sint
          cillum. Non dolore voluptate pariatur eu irure. Et fugiat proident eu
          aute labore cillum non occaecat velit.Cillum dolore ea laboris qui
          anim nulla et elit nulla nisi exercitation id ipsum. Exercitation ex
          elit cupidatat enim non laboris voluptate mollit non consectetur non.
          Esse culpa pariatur enim pariatur dolor adipisicing. Deserunt
          reprehenderit consectetur magna minim exercitation in pariatur fugiat
          adipisicing reprehenderit. Veniam nisi consectetur esse exercitation
          sunt nisi consectetur proident.Do amet enim commodo dolore deserunt pariatur nisi nulla elit velit consequat Lorem in tempor. Cillum ullamco ex sit in id do irure sunt in. Labore sunt ad ex Lorem eu et esse. Esse est culpa laboris enim ut sunt duis exercitation ipsum cupidatat. Duis dolore enim ex magna culpa aute sint qui ut elit.
       Non elit ex excepteur pariatur nisi dolore Lorem ea magna enim ullamco ipsum consectetur. Officia id deserunt non occaecat do. Reprehenderit minim minim nisi enim amet laborum ullamco aliquip proident exercitation voluptate nulla esse. Do nisi id reprehenderit in labore laboris ad veniam nisi occaecat. Tempor proident enim ipsum cillum laborum sit proident est deserunt anim excepteur deserunt. Tempor quis eiusmod ut elit occaecat ut esse amet aute duis sunt. </p>
      </div>
    </div>
  );
}
