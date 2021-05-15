import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#6effc0",
    height: "4rem",
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#2b2d42",
    },
  },
}));

const Home = () => {
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
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Grid container direction="column">
              <div className="navbar-text">Studious-Techies</div>
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

      <div className="trending"></div>
      <Grid container direction="column" justify="center" alignItems="center">
        <div className="trend-heading">Trending Topics</div>
        <div className="topics">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div className="topic">React.js</div>
            <div className="topic">JavaScript</div>
            <div className="topic">Machine Learning</div>
            <div className="topic">Python</div>
            <div className="topic">Vue.js</div>
            <div className="topic">Ethical Hacking</div>
          </Grid>
        </div>
        <hr className="line-home"/>
      </Grid>
    </div>
  );
};

export default Home;
