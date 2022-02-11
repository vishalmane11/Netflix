import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";
import Img from "../Images/first clas.png";
function Home() {
  var nav = useNavigate();
  const [first, setfirst] = useState();
  var change = (e) => {
    setfirst(e.target.value);
  };
  var author = () => {
    if (!first || first.length <= 4) {
      alert("please enter valid mail");
    } else {
      nav("/Card");
    }
  };
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div className="w-full h-screen  swap">
        <div className="under h-screen">
          {/* .......Navbar........................................//////////////////////////////////////////........................ */}
          <div className="w-full h-24  flex justify-between items-center pl-20 pr-20 bg-black">
            <div className="logo">
              <img
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                alt=""
                className="w-40"
              />
            </div>

            <button className="bg-red-600 py-2 px-4 text-white rounded-sm text-base">
              Sign In
            </button>
          </div>
          {/* forms ----------------------------------------------------------------------------------------------------- */}
          <div className="text-center mt-36">
            <h1 className="text-white text-6xl font-bold">
              Unlimited movies,Tv <br />
              shows and more
            </h1>
            <h3 className="text-white text-2xl mt-6">
              Watch anywhere. cancel anytime{" "}
            </h3>
            <h5 className="text-white text-xl mt-3">
              Ready to watch?Enter your email to create or restart your
              membership
            </h5>
            <div className="text-white mt-14 ">
              <input
                type="text"
                src=""
                alt=""
                onChange={change}
                className="w-1/3 h-12 outline-none pl-10 text-black"
                placeholder="Enter the email"
              />
              <button
                className="py-3 pr-12 bg-red-500 text-center "
                onClick={author}
              >
                <span className="ml-10"></span>Get start
              </button>
            </div>
          </div>
          <hr className="mt-36 h-2 bg-slate-800" />
          {/* second   line ---------------------------------------------------------------------------------------*/}
          <div className="w-full h-3/5 bg-black flex">
            <div className="left text-white w-1/2 h-full  text-right ">
              <h1 className="text-5xl font-bold mr-24 mt-32 ">
                Enjoy on your Tv.
              </h1>
              <h6 className="text-xl mr-16 mt-10 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing <br />
                elit. the temaperature quae aut sunt aliquid.fgfgdsd <br />
                Happy New Package!!!!!
                <span className="mr-24" />
              </h6>
            </div>
            <div className="right ">
              <div className="">
                <img
                  src={Img}
                  alt=""
                  className="ml-28 border-1 border-b-gray-400"
                />
              </div>
            </div>
          </div>
          <hr />
          {/* third line______________---------------------__________________-------------------------- */}
          <div className="w-full h-3/5 bg-black flex">
            <div className="w-full h-3/5 bg-black flex">
              <div className="right ">
                <div className="">
                  <img
                    src="https://images.indianexpress.com/2021/11/c9fbc44d-6a71-4cf9-8773-b696e7f05bcc.jpg"
                    alt=""
                    className="ml-28 border-1 border-b-gray-400 h-80 mt-12"
                  />
                </div>
              </div>
              <div className="left text-white w-1/2 h-full  text-right ">
                <h1 className="text-5xl font-bold mr-24 mt-32 ">
                  Download your shows <br />
                  to watch offline.<span className="mr-28"></span>
                </h1>
                <h6 className="text-xl mr-28 mt-10 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing <br />
                  elit. the temaperature quae aut sunt aliquid.
                  <span className="mr-24" />
                </h6>
              </div>
            </div>
          </div>
          <hr />
          {/* fourth side__________________-------------------------------_________________ */}
          <div>
            <div className="w-full h-3/5 bg-black flex">
              <div className="left text-white w-1/2 h-full  text-right ">
                <h1 className="text-5xl font-bold ml-6 mt-32 ">
                  Create Profiles for children
                </h1>
                <h6 className="text-xl mr-20 mt-10 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing <br />
                  elit. the temaperature quae aut sunt aliquid.fgfgdsd <br />
                  Happy New Package!!!!!
                  <span className="mr-24" />
                </h6>
              </div>
              <div className="right ">
                <div className="">
                  <img
                    src={Img}
                    alt=""
                    className="ml-28 border-1 border-b-gray-400"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
          {/* footer */}
          <div className="w-full h-80 bg-black flex flex-col items-center justify-center">
            <h2 className=" text-white mb-20">
              Question? call 000-435-123-0007
            </h2>
            <div className="flex">
              <div className="text-slate-500">
                <h1 className="text-white">FaQ</h1>
                <h1 className="text-white mt-2">invetsigation </h1>
                <h1 className="text-white mt-2">party</h1>
                <h1 className="text-white mt-2">spedd issue</h1>
              </div>
              <div className="text-slate-500 ml-20 ">
                <h1 className="text-white">FaQ</h1>
                <h1 className="text-white mt-2">invetsigation </h1>
                <h1 className="text-white mt-2">party</h1>
                <h1 className="text-white mt-2">spedd issue</h1>
              </div>
              <div className="text-slate-500 ml-20">
                <h1 className="text-white">FaQ</h1>
                <h1 className="text-white mt-2">invetsigation </h1>
                <h1 className="text-white mt-2">party</h1>
                <h1 className="text-white mt-2">spedd issue</h1>
              </div>
              <div className="text-slate-500 ml-20">
                <h1 className="text-white">FaQ</h1>
                <h1 className="text-white mt-2">invetsigation </h1>
                <h1 className="text-white mt-2">party</h1>
                <h1 className="text-white mt-2">spedd issue</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
