import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import "./Instructors.css";
import Ins1 from "../Images/DevEd.png";
import Ins2 from "../Images/Nikhil.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#6effc0",
    height: "4rem",
  },
}));

const Instructors = () => {
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

      <div className="instructors-container">
        <div className="instructor">
          <div className="insimg">
            <img className="deved-img" src={Ins1} alt="" />
          </div>
          <div className="instext">
            Dev Ed is a multimedia content creator with over 200k subscribers on
            youtube. Teaching you a wide range of technologies from Web
            Development all the way to design, 3D and more!
          </div>
        </div>
         <div className="instructor">
          <div className="insimg">
            <img className="deved-img" src={Ins1} alt="" />
          </div>
          <div className="instext">
            Dev Ed is a multimedia content creator with over 200k subscribers on
            youtube. Teaching you a wide range of technologies from Web
            Development all the way to design, 3D and more!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
