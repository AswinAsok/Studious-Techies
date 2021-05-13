import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import './Landing.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0FFF95",
    height: "8.5vh"
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <p className="nav-text">Studious-Techies</p>
            </Grid>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default Landing;
