import React, { Component } from "react";
import { AppBar, Typography, Toolbar, Container } from "@mui/material";
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
        <AppBar position="static" sx={{ bgcolor: "black" }}>
          <Container>
            <Toolbar disableGutters>
              <div style={{ backgroundColor: "white" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  FOOT LOCKER
                </Typography>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default AnnouncementBar;
