import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../Images/About.svg";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import Footer from "../Footer/Footer";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#6effc0",
    height: "4rem",
  },
}));

const AboutUs = () => {
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
              <a href="/">
                <div className="nav-text">Studious-Techies</div>
              </a>
              <div className="nav-textdown">- By Aswin Asok -</div>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>

      <div className="aboutus-container">
        <div className="logos-container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Fade>
              <div className="heading">About Us</div>
              <img className="logo" src={logo} alt="Image" />
            </Fade>
            <Fade top>
              <div>
                <p>
                  We are a community comprising of students and professionals
                  <br />
                  who believe in <b>self and peer to peer</b> learning.
                  <br /> Here at Studious-Techies we are providing knowledge to
                  <br /> individuals at an afforable price.
                </p>
              </div>
              <div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Link to="/instructors">
                    <button className="insbtn">Meet our Mentors</button>
                  </Link>
                  <Link to="/contact-us">
                    <button className="insbtn">Contact Us</button>
                  </Link>
                </Grid>
              </div>
            </Fade>
          </Grid>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default AboutUs;
