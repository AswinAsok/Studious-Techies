import React from "react";
import "./Login.css";
import Grid from "@material-ui/core/Grid";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="login-header">
            <div className="header">Studious-Techies</div>
          </div>

          <div className="forms">
            <div className="username">
              <div className="label">Username</div>
              <input value="_aswin_asok_" className="input-field" type="text" />
            </div>

            <div className="password">
              <div className="label">Password</div>
              <input value="***********" className="input-field" type="text" />
            </div>

            <div className="sbtn">
              <button className="login-button">Login</button>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
