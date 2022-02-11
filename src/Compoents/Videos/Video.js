import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { context } from "../Cards/Card";
function Video(props) {
  // console.log(props.url);

  return (
    <div>
      {/* <ReactPlayer
        url={}
      ></ReactPlayer> */}
    </div>
  );
}
var mapStateToProps = (state) => ({
  url: state.data,
});
export default connect(mapStateToProps)(Video);
