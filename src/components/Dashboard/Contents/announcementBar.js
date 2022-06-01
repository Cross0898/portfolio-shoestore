import React, { Component } from "react";
// import Marquee from "react-fast-marquee";
import {
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Dialog,
} from "@mui/material";
import "./announcement.css";
import CloseIcon from "@mui/icons-material/Close";

class AnnouncementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Dialog
      isOpen: false,
      activeAnnouncements: [],
      mockAnnouncements: [
        {
          text: "Free Shipping for FLX Members! Learn More",
        },
      ],
      isAnnounceVisible: "",
    };
  }

  componentDidMount() {}
  //=============================UI FUNCTIONALITIES===============================//
  handleClose() {
    this.setState({ isOpen: false });
  }
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
            <div style={{ textAlign: "center" }}>
              <Typography>
                <span
                  className="announcementText"
                  onClick={() => {
                    this.setState({ isOpen: true });
                  }}
                >
                  Free Shipping for FLX Members! Learn More
                </span>
              </Typography>
              &emsp;
            </div>
            {/* {this.state.mockAnnouncements.length === 1 ? (
              this.state.mockAnnouncements.map((x, i) => {
                return (
                  <div style={{ textAlign: "center" }}>
                    <Typography>
                      <span
                        className="announcementText"
                        onClick={() => {
                          this.setState({ isOpen: true });
                        }}
                      >
                        {x.text}
                      </span>
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
                        <span
                          style={{ fontWeight: 500, color: "#036ad8" }}
                          onClick={() => {
                            this.setState({ isOpen: true });
                          }}
                        >
                          {x.text} &emsp;
                        </span>{" "}
                      </Typography>
                      &emsp;
                    </div>
                  );
                })}
              </Marquee>
            )} */}
          </Grid>
        </Grid>
        <Dialog
          open={this.state.isOpen}
          fullWidth
          maxWidth="md"
          closeAfterTransition
        >
          <DialogTitle>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Typography style={{ fontWeight: "bolder", fontSize: 20 }}>
                  Promotion: Free Shipping for FLX Members
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <CloseIcon
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => this.setState({ isOpen: false })}
                />
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent dividers style={{ padding: 50, fontSize: 16 }}>
            <Typography gutterBottom>
              Free standard shipping with no minimums for FLX members; some
              exclusions apply. Non-member`s order value must total $49 or more
              before services, taxes, and shipping & handling. Savings are
              automatically applied at checkout. Offer is limited to standard
              ground delivery within the 48 contiguous United States and APO/FPO
              addresses. Entire order must ship to a single address. Excludes
              drop ships and any items with fixed shipping rates. Does not apply
              to prior purchases or open orders. Customer is responsible for
              shipping costs on returned merchandise. Promotion may be modified
              or terminated at any time. Valid online at footlocker.com, by
              phone, or by mail. Certain restrictions and exclusions apply.
            </Typography>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default AnnouncementBar;
