import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import "./Instructors.css";
import Ins1 from "../Images/DevEd.png";
import Ins2 from "../Images/Nikhil.png";
import Ins3 from "../Images/Hitesh.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

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
              <Link style={{ "text-decoration": "none" }} to="/">
                <div className="nav-text">Studious-Techies</div>
              </Link>
              <div className="nav-textdown">- By Aswin Asok -</div>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <div className="headingins">
        Our Mentors
        <hr className="lined" />
      </div>

      <div className="instructors-container">
        <div className="instructor">
          <div className="insimg">
            <img className="deved-img" src={Ins1} alt="" />
            <div className="insname">Dev Ed</div>
          </div>
          <div className="instext">
            Dev Ed is a multimedia content creator with over 200k subscribers on
            youtube. Teaching you a wide range of technologies from Web
            Development all the way to design, 3D and more!
          </div>
        </div>
        <div className="instructor">
          <div className="insimg">
            <img className="nik-img" src={Ins2} alt="" />
            <div className="insname">Nikhil Kilivayil</div>
          </div>
          <div className="instext">
            Nikhil is a Software Engineer turned Entrepreneur who has 9+ years
            of work experience in the software industry. His passion for
            teaching had led him to start an educational institution where he
            teaches how to learn for yourself and build a good career in the
            tech industry.
          </div>
        </div>
      </div>
      <div className="instructors-container">
        <div className="instructor">
          <div className="insimg">
            <img className="hit-img" src={Ins3} alt="" />
            <div className="insname">Hitesh Choudhary</div>
          </div>
          <div className="instext">
            Hitesh Choudhary is a Teacher by ♥️ and programmer by profession. He
            is content creator in Youtube and makes videos related to code and
            tech.
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>
  );
};

export default Instructors;
