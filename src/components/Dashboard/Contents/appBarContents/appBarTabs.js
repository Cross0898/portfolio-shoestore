import React, { Component } from "react";
import { Tabs, Tab } from "@mui/material";

class AppBarTabs extends Component {
  state = {
    currentTab: 0,
  };

  handleChange(event) {
    console.log("event", event.target);
  }
  render() {
    const handleChange = (event, newValue) => {
      if (newValue !== 3) {
        sessionStorage.setItem("subTabIndex", -1);
      }
      this.setState({ currentTab: parseInt(newValue) });
    };
    return (
      <React.Fragment>
        <Tabs
          centered
          textColor={"white"}
          value={this.state.currentTab}
          onChange={handleChange}
        >
          <Tab style={{ fontSize: 14, fontWeight: "bolder" }} label="MEN'S" />
          <Tab style={{ fontSize: 14, fontWeight: "bolder" }} label="WOMEN'S" />
          <Tab style={{ fontSize: 14, fontWeight: "bolder" }} label="KIDS'" />
          <Tab
            style={{ fontSize: 14, fontWeight: "bolder" }}
            label="CLOTHING"
          />
          <Tab
            style={{ fontSize: 14, fontWeight: "bolder" }}
            label="RELEASES"
          />
          <Tab style={{ fontSize: 14, fontWeight: "bolder" }} label="SALE" />
          <Tab
            style={{ fontSize: 14, fontWeight: "bolder" }}
            label="FLX REWARDS"
          />
        </Tabs>
      </React.Fragment>
    );
  }
}

export default AppBarTabs;
