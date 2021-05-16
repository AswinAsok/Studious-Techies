import React, { useState, useEffect } from "react";
import "./SignUp.css";
import Grid from "@material-ui/core/Grid";
import back from "../Images/Back.png";
import { Link } from "react-router-dom";

const SignUp = () => {
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
    <div className="signup-container">
      <div className="signup-box">
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="signup-headercontainer">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <div className="goback">
                <Link to="/">
                  <img className="goback" src={back} alt="" />
                </Link>
              </div>
              <div className="signup-header">
                <div className="header">Studious-Techies</div>
              </div>
              <div className="time">{time}</div>
            </Grid>
          </div>

          <div className="form">
            <div className="username">
              <div className="label">Username</div>
              <input value="_aswin_asok_" className="input-field" type="text" />
            </div>
            <div className="fname">
              <div className="label">Full Name</div>
              <input value="Aswin Asok" className="input-field" type="text" />
            </div>

            <div className="email">
              <div className="label">Email</div>
              <input
                value="aswinasokofficial@gmail.com"
                className="input-field"
                type="text"
              />
            </div>

            <div className="password">
              <div className="label">Password</div>
              <input value="***********" className="input-field" type="text" />
            </div>

            <div className="cpassword">
              <div className="label">Confirm Password</div>
              <input value="***********" className="input-field" type="text" />
            </div>

            <div className="terms">
              By Clicking the Sign-Up button you are agreeing to the{" "}
              <i>Terms and Conditions</i> which are mentioned.
            </div>

            <div className="sbtn">
              <Link to="/home">
                <button className="signup-button">Sign Up</button>
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default SignUp;
