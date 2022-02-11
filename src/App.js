import React, { Component } from "react";
import { connect } from "react-redux";
import { studentaction } from "./store/Actions/Action";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Compoents/Home/Home";
import Login from "./Compoents/Login/Login";
import Card from "./Compoents/Cards/Card";
import Video from "./Compoents/Videos/Video";
import Admin from "./Compoents/Admin/Admin";
class App extends Component {
  componentDidMount() {
    var day = this.props.data;
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Card" element={<Card />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
var mapStateToProps = (state) => ({
  data: state.student,
});
var mapDispatchToProps = (dispatch) => ({
  change: (data) => dispatch(studentaction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
