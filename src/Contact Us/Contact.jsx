import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../Images/Contact.svg";
import { Link } from "react-router-dom";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#6effc0",
    height: "4rem",
  },
}));

const Contact = () => {
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
            <div className="heading">Contact Us</div>
            <img className="logo" src={logo} alt="Image" />
            <div>
              <p>
                In order to contact us you can either email
                <b> studioustech@tech.com</b> <br /> or connect with one of your
                nearest campus communites.<br />Being a completely <b>online platform</b>,
                Studious Techies currently don't have any offine offices.
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

export default Contact;
