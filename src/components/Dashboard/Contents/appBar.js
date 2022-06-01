import React, { Component } from "react";
import { AppBar, Typography, Toolbar, Grid } from "@mui/material";
import Logo from "../../../static/images/homepagelogo.jpg";
import AppBarTabs from "./appBarContents/appBarTabs";
import "./announcement.css";

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
        <AppBar position="static" sx={{ bgcolor: "black", width: 1 }}>
          <Toolbar disableGutters>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <div style={{ backgroundColor: "black" }}>
                  <img src={Logo} alt="Logo" />
                  <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: "bolder",
                      letterSpacing: ".3rem",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    BOGSILOG
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={5}>
                <AppBarTabs />
              </Grid>
              <Grid item xs={4}>
                {/* Search */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default AnnouncementBar;
