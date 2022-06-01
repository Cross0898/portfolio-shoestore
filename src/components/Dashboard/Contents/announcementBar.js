import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import { DialogContent, Grid, Typography } from "@mui/material";
import "./announcement.css";
// const CustomFunc = require("../utils/customFunction");

class AnnouncementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAnnouncements: [],
      mockAnnouncements: [
        {
          text: "PromotionFree Shipping for FLX Members! Learn More",
        },
      ],
      isAnnounceVisible: "",
    };
  }

  componentDidMount() {}

  onHideAnnounce = () => {
    sessionStorage.setItem("closedAnnounce", "none");
    this.setState({
      isAnnounceVisible: "none",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Grid
          className="announcementBar"
          style={{
            display: this.state.isAnnounceVisible,
          }}
        >
          <Grid item xs={12} style={{ alignSelf: "center" }}>
            {this.state.mockAnnouncements.length === 1 ? (
              this.state.mockAnnouncements.map((x, i) => {
                return (
                  <div style={{ textAlign: "center" }}>
                    <Typography>
                      <span className="announcementText">{x.text}</span>
                    </Typography>
                    &emsp;
                  </div>
                );
              })
            ) : (
              <Marquee gradient={false} speed={50}>
                {this.state.mockAnnouncements.map((x, i) => {
                  return (
                    <div style={{ display: "flex" }}>
                      <Typography className="announcementText">
                        <span style={{ fontWeight: 500, color: "#036ad8" }}>
                          {x.text} &emsp;
                        </span>{" "}
                      </Typography>
                      &emsp;
                    </div>
                  );
                })}
              </Marquee>
            )}
          </Grid>
        </Grid>
        <Dialog
          open={this.state.isOpen}
          fullWidth
          maxWidth="sm"
          closeAfterTransition
          onClose={this.state.handleClose}
        >
          <DialogContent>HELLO</DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default AnnouncementBar;
