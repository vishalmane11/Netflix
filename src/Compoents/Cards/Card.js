import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import "./card.css";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
import ReactPlayer from "react-player";
import { Info } from "../Admin/Admin";
// Import Swiper styles
import "swiper/css";
import Navbar from "../Navbar/Navbar";
// import Curousel from "react-elastic-carousel";
import { studentaction } from "../../store/Actions/Action";
import { createContext } from "react";
import Video from "../Videos/Video";
import { data as bata } from "../Data/Data";
export const context = createContext();
function Card(props) {
  const [first, setfirst] = useState([]);
  const [data, setdata] = useState(bata);
  const [url, seturl] = useState();
  const [newurl, setnewurl] = useState();

  const [picture, setpicture] = useState();
  const profile = useContext(Info);

  var Nav = useNavigate();
  // console.log(url);
  console.log(props.handle);
  useEffect(() => {
    var imdata = [...data];
    var random = Math.floor(Math.random() * imdata.length);

    var filter = imdata.filter((data) => {
      return data.id == random;
    });
    setnewurl(filter);
  }, []);

  console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:2400/get")

      .then((res) => {
        // setfirst(res.data.genres);
        setfirst(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(first);

  let categorized = [];

  first.map((data) => {
    categorized[data.category] = first.filter((product) => {
      return product.category === data.category;
    });
  });
  // console.log(categorized);

  // console.log(same);

  // function posterchange() {

  // console.log(render);
  // setchange(render);

  // }
  // const poster = Math.floor(Math.random() * data.length);
  // console.log(poster.id);

  // console.log(change);
  // console.log(picture);
  const start = (all) => {
    // Nav("/Video");s
    // if (url) {
    //   seturl(" ");
    // } else {
    seturl(all.Trailer);
  };
  // console.log(url);

  return (
    <div className="w-full h-min   ">
      <Navbar updateurl={newurl} />
      <div className="  w-full">
        {url && (
          <ReactPlayer
            url={url}
            className="ml-96 w-full h-56 mt-10"
          ></ReactPlayer>
        )}
      </div>
      {Object.keys(categorized).map((data, index) => {
        return (
          <div className="text-3xl mt-8 font-bold pl-12">
            {data}
            <div className="flex ">
              <div className="bar w-full h-96 ml-auto mr-auto  flex overflow-hidden ">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={40}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                >
                  {categorized[data].map((all) => {
                    return (
                      <SwiperSlide>
                        <img
                          src={all.poster}
                          alt=""
                          className="w-64 h-80 mt-7 ml-10 transition-transform hover:scale-110 "
                          onClick={() => start(all)}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

var mapStateToProps = (state) => ({
  handle: state.profile,
});

export default connect(mapStateToProps)(Card);
