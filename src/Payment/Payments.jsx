import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import VisibilityOffSharpIcon from "@material-ui/icons/VisibilityOffSharp";

import "./Payments.css";

const useStyles = makeStyles((theme) => ({
  root_one: {
    backgroundColor: "#6effc0",
    height: "4rem",
    marginBottom: "1rem",
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#2b2d42",
    },
  },
}));

const Payments = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div>
      <div className="nav">
        <AppBar className={classes.root_one} position="static">
          <Toolbar>
            <Grid container direction="column">
              <Link style={{ "text-decoration": "none" }} to="/">
                <div className="navbar-text">Studious-Techies</div>
              </Link>
            </Grid>
            <div>
              <div>
                <Button onClick={handleClick} className="menu">
                  <p className="menu-text">ASWIN ASOK</p>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  className={classes.menu}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <div className="menu-innertext">Profile</div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="menu-innertext">My account</div>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <div className="menu-innertext">Logout</div>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className="payments-container">
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="credit-card">
            <div className="card-name">
              <div>Aswin Asok</div>
            </div>
            <div className="card-number">
              <div>5475-8541-6331-5446</div>
            </div>
            <div className="cvv-number">
              <div className="eye-text">***</div>
              <div className="eye">
                <VisibilityOffSharpIcon />
              </div>
              <div className="card-issuer">Master Card</div>
            </div>
            <div className="bank">
              <div>State Bank of India</div>
            </div>
          </div>

          <div className="purchases">
            <div className="title">
              <div>Purchases</div>
              <hr className="line"/>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Payments;
