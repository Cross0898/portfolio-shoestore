import React, { Component } from "react";
import AnnouncementBar from "./Contents/announcementBar";
import AppBarHeader from "./Contents/appBar.js";

class Auth extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AnnouncementBar />
        <AppBarHeader />
      </React.Fragment>
    );
  }
}

export default Auth;
