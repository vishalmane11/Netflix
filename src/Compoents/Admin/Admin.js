import React, { Component, createContext } from "react";
import { connect } from "react-redux";
import { profileaction } from "../../store/Actions/Action";
import Card from "../Cards/Card";
export const Info = createContext();
class Admin extends Component {
  state = { profile: [{}], category: "", poster: "", Trailer: "", Info: "" };
  render() {
    // console.log(this.props.statedata);
    var change = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    // console.log(this.state);
    let submit = () => {
      var { category, poster, Trailer, Info } = this.state;
      var copy = [...this.state.profile];
      copy.push(category, poster, Trailer, Info);
      this.setState({ profile: copy });
      // this.props.update(this.state.profile);
    };
    // console.log(this.state.profile);
    return (
      <div className="flex flex-col w-full h-screen items-center ">
        <input
          type="text"
          className="w-80 -ml-60 border-b-2 mt-72 outline-none border-blue-500 focus:w-1/2"
          placeholder="category"
          onChange={change}
          name="category"
        />
        <input
          type="text"
          className="w-80 -ml-60   border-b-2 mt-8 outline-none border-blue-500 ease-in-out delay-500 focus:w-1/2"
          placeholder="Poster"
          onChange={change}
          name="poster"
        />
        <input
          type="text"
          className="w-80 -ml-60   border-b-2 mt-8 outline-none border-blue-500 focus:w-1/2"
          onChange={change}
          name="Trailer"
          placeholder="Trailer"
        />
        <input
          type="text"
          className="w-80 -ml-60   border-b-2 mt-8 outline-none border-blue-500 focus:w-1/2"
          onChange={change}
          placeholder="Info"
          name="Info"
        />
        <button className="mt-20  w-32 h-14 bg-red-400 ml-70" onClick={submit}>
          Submit
        </button>
      </div>
    );
  }
}
// var mapStateToProps = (state) => ({
//   statedata: state.student,
// });
var mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(profileaction(data)),
});
export default connect(mapDispatchToProps)(Admin);
