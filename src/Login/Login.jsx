import React, { useState, useEffect } from "react";
import "./Login.css";
import Grid from "@material-ui/core/Grid";
import back from "../Images/Back.png";
import { Link } from "react-router-dom";
import githublogo from "../Images/github 1.png";
import gmaillogo from "../Images/gmail 1.png";
import linkedlnlogo from "../Images/linkedin 1.png";

const Login = () => {
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
    <div className="login-container">
      <div className="login-box">
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="login-headercontainer">
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
              <div className="login-header">
                <div className="header">Studious-Techies</div>
              </div>
              <div className="time">{time}</div>
            </Grid>
          </div>

          <div className="forms">
            <div className="username">
              <div className="label">Username</div>
              <input value="_aswin_asok_" className="input-fields" type="text" />
            </div>

            <div className="password">
              <div className="label">Password</div>
              <input value="***********" className="input-fields" type="text" />
            </div>

            <div className="iamnotrobot">
            <div className="box">
                <label class="container">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="text-robot">I am not a robot</div>
            </div>
            

            <div className="sbtn">
              <Link to="/home">
                <button className="login-button">Login</button>
              </Link>
            </div>

            <div className="general">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {/* <div className="general-texttwo">Forgot Password ?</div>
                <Link to="/signup">
                  <div className="general-textone">Don't have a Account?</div>
                </Link> */}
              </Grid>
            </div>
          </div>
          <div className="option-text"></div>
          <div className="login-options">
            <div className="github-logo">
              <img className="githublogo" src={githublogo} alt="" />
            </div>
            <div className="gmail">
              <img className="githublogo" src={gmaillogo} alt="" />
            </div>
            <div className="linkedln">
              <img className="githublogo" src={linkedlnlogo} alt="" />
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
