import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
import Admin from "./Navbar";
export default function Navbar(props) {
  const [toogle, settoogle] = useState(false);
  const { updateurl } = props;
  console.log(updateurl);
  console.log(toogle);
  var nav = useNavigate();
  var move = () => {
    nav("/Admin");
  };
  return (
    <div className="class">
      <div className="main ">
        <div>lgogo</div>
        <div className="cursor-pointer " onClick={move}>
          Admin Dashboard
        </div>
      </div>
      <div className="cont ">
        <h1 className="text-4xl text-white font-bold">Movies name</h1>
        <div className="flex">
          <button className="mt-5 text-white py-2 px-8 border-2 rounded-sm">
            Play
          </button>
          <button className="ml-3 mt-5 text-white py-2 px-8 border-2 rounded-sm">
            Add playlist
          </button>
        </div>
        <div className="mt-7 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque{" "}
          <br />
          id perspiciatis similique corrupti sint dolorum perferendis natus
          excepturi rerum?
        </div>
      </div>
    </div>
  );
}
