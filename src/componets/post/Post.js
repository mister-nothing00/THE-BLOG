import React from "react";
import "./post.css";
import Img from "./img1.jpg";

export default function Post() {
  return (
    <div className="post">
      <img src={Img} alt="card--img" className="postImg" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Ad dolore nulla laborum veniam</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Magna sit magna exercitation magna irure. Deserunt esse enim in Lorem
        proident tempor quis aliqua pariatur pariatur aliquip. Ipsum nulla amet
        laborum Lorem irure laborum in amet ipsum. Labore exercitation cillum
        labore cupidatat magna laborum cupidatat consequat ullamco officia velit
        dolor. Qui esse ipsum deserunt velit officia nostrud consequat aliqua
        duis velit anim nisi ipsum. Sunt aute reprehenderit fugiat labore fugiat
        deserunt qui adipisicing cupidatat non commodo nostrud. Et incididunt
        duis irure reprehenderit eu labore nulla.Do minim eiusmod sit ullamco
        deserunt culpa reprehenderit amet excepteur. Incididunt occaecat
        reprehenderit proident nisi aliqua ut cupidatat elit enim. Veniam
        adipisicing anim laborum enim consectetur eiusmod sint aute elit aute
        amet elit. Ex aute exercitation voluptate culpa. Minim ad ut occaecat
        aliqua dolor aliquip sint est consequat pariatur ad officia anim labore.
        Tempor id mollit irure sit dolor esse ipsum. Officia deserunt
        reprehenderit tempor laboris.
      </p>
    </div>
  );
}
