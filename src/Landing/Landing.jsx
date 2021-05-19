import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../Images/LandingLogo.svg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Landing.css";
import s1 from "../Images/ap.png";
import s2 from "../Images/Fb.png";
import s3 from "../Images/Gh.png";
import s4 from "../Images/Go.png";
import s5 from "../Images/ib.png";
import s6 from "../Images/ms.png";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#6effc0",
    height: "4rem",
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="nav">
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div className="nav-text">Studious-Techies</div>
              <div className="nav-textdown">- By Aswin Asok -</div>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>

      <div className="logo-container">
        <Grid container direction="column" justify="center" alignItems="center">
          <Fade>
            <img className="logo" src={logo} alt="Image" />
          </Fade>
          <Slide left>
            <div>
              <p>
                Are You Prepared to Explore the world of Tech with other{" "}
                <b>Studious Techies</b>.<br></br>
                Join us by now lets start <b>Learning</b>
              </p>
            </div>
          </Slide>
          <Slide right>
            <div className="buttons">
              <Link to="/signup">
                <button className="logbtns">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="logbtns">Login</button>
              </Link>
            </div>
            <Link to="/about-us">
              <button className="abtbtns">About Us</button>
            </Link>
          </Slide>
        </Grid>
      </div>
      <Fade>
      <hr className="line-landing" />
      </Fade>
      <Fade>
        <div className="sponsers">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className="stext">Our Sponsers</div>
            <hr className="line-landing1" />
            <div className="slogo">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img className="sp-logo" src={s1} alt="" />
                <img className="sp-logo" src={s2} alt="" />
                <img className="sp-logo" src={s3} alt="" />
                <img className="sp-logo" src={s4} alt="" />
                <img className="sp-logo" src={s5} alt="" />
                <img className="sp-logo" src={s6} alt="" />
              </Grid>
            </div>
          </Grid>
        </div>
      </Fade>
      <Footer />
    </div>
  );
};

export default Landing;
