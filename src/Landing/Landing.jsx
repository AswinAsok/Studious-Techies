import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../Images/LandingLogo.svg";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import "./Landing.css";

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
          <img className="logo" src={logo} alt="Image" />
          <div>
            <p>
              Are You Prepared to Explore the world of Tech with other <b>Studious Techies</b>.
              <br></br>
              Join us by now lets start <b>Learning</b>
            </p>
          </div>
          <div className="buttons">
            <Link to="/signup"><button className="logbtns">Sign Up</button></Link>
            <Link to="/login"><button className="logbtns">Login</button></Link>
          </div>
          
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
