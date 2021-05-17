import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../Images/About.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./AboutUs.css";

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
              <div className="nav-text">Studious-Techies</div>
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
              <div className="heading">About Us</div>
            <img className="logo" src={logo} alt="Image" />
            <div>
              <p>
                We are a community comprising of students and professionals
                <br />
                who believe in <b>self and peer to peer</b> learning.
                <br /> Here at Studious-Techies we are providing knowledge to
                <br /> individuals at an afforable price.
              </p>
            </div>
            <Link to="/instructors">
            <button className="insbtn">Meet our Mentors</button>
          </Link>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
