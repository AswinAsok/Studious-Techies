import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import back from "../Images/Back.png";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./Profile.css";
import VisibilityOffSharpIcon from "@material-ui/icons/VisibilityOffSharp";

import asw from "../Images/Aswin.png";

const useStyles = makeStyles((theme) => ({
  large: {
    marginTop: "1rem",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [time, setTime] = useState(
    new Date().getHours() +
      ":" +
      ((new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().getHours() +
          ":" +
          ((new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile-headercontainer">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <div className="goback">
                <Link to="/home">
                  <img className="goback" src={back} alt="" />
                </Link>
              </div>
              <div className="profile-header">
                <div className="header">Studious-Techies</div>
              </div>
              <div className="time">{time}</div>
            </Grid>
          </div>
          <div className="details">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div>
                <Avatar alt="Aswin Asok" src={asw} className={classes.large} />
              </div>
              <div className="name">Aswin Asok</div>
              <b className="pro-email">aswinasokofficial@gmail.com</b>
              <b className="pro-join">Joined on 3rd February 2020</b>
              <hr className="pro-line" />
              <b>Saved Cards</b>
              <div className="cardpro">
                <div className="procredit-card">
                  <div className="procard-number">
                    <div>5475-8541-6331-5446</div>
                  </div>
                  <div className="procvv-number">
                    <div className="proeye-text">***</div>
                    <div className="proeye">
                      <VisibilityOffSharpIcon />
                    </div>
                    <div className="procard-issuer">Master Card</div>
                  </div>
                </div>
              </div>
              <hr className="pro-line" />
              <div className="courses">
                <div className="act">Active Courses</div>
                <hr className="pro1-line" />
                <div className="active">React.js</div>
                <div className="active">JavaScript</div>
                <div className="active">HTML & CSS</div>
              </div>
              <hr className="pro-line" />
              <a href="/">
                <div className="pro-buy">Logout</div>
              </a>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
