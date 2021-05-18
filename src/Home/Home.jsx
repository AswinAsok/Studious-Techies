import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import reactlogo from "../Images/React.jpg";
import jslogo from "../Images/js.png";
import htmlcss from "../Images/htmlcss.png";

import e1 from "../Images/Coding Event.png";
import e2 from "../Images/Event2.jpg";

import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root_one: {
    backgroundColor: "#6effc0",
    height: "4rem",
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#2b2d42",
    },
  },
  root: {
    minWidth: 320,
    maxWidth: 300,
    minHeight: 400,
    backgroundColor: "#6effc0",
    color: "#2b2d42",
    borderRadius: "5px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
                  <a href="/profile">
                    <MenuItem onClick={handleClose}>
                      <div className="menu-innertext">Profile</div>
                    </MenuItem>
                  </a>
                  <a href="/">
                    <MenuItem onClick={handleClose}>
                      <div className="menu-innertext">Logout</div>
                    </MenuItem>
                  </a>
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
          <Grid container direction="row" justify="center" alignItems="center">
            <div className="topic">React.js</div>
            <div className="topic">JavaScript</div>
            <div className="topic">Machine Learning</div>
            <div className="topic">Python</div>
            <div className="topic">Vue.js</div>
            <div className="topic">Ethical Hacking</div>
          </Grid>
        </div>
        <hr className="line-home" />
        <div className="latest-heading">Latest Courses</div>
      </Grid>

      <div className="courses">
        <Grid container direction="row" justify="center" alignItems="center">
          <div className="course">
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={reactlogo}
                title="React.js"
              />
              <CardContent className="card-content">
                This course will teach you everything you need to know about
                React. Get started now with 0 experience in React, we will take
                it step by step from the beginning, understanding basics
                concepts to creating complex web apps with Redux.
              </CardContent>
              <div className="prices">
                <div className="old">Rs.1299</div>
                <div className="new">Rs.699</div>
                <Link style={{ "text-decoration": "none" }} to="/payments">
                  <div className="buy">Buy Now</div>
                </Link>
              </div>
            </Card>
          </div>
          <div className="course">
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={jslogo}
                title="React.js"
              />
              <CardContent className="card-content">
                Javascript is the most popular programming language in the
                world! This course is ideal for anyone who wants to get started
                in front end development. Learn javascript from absolute scratch
                with no prior experience.
              </CardContent>
              <div className="prices">
                <div className="old">Rs.999</div>
                <div className="new">Rs.599</div>
                <Link style={{ "text-decoration": "none" }} to="/payments">
                  <div className="buy">Buy Now</div>
                </Link>
              </div>
            </Card>
          </div>
          <div className="course">
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={htmlcss}
                title="React.js"
              />
              <CardContent className="card-content">
                IIf you are a complete beginner we will cover all the basics to
                get you up and going to create your first website. If you have
                some web development skills already, do not worry! We will
                create 3 projects with awesome design and animations!
              </CardContent>
              <div className="prices">
                <div className="old">Rs.699</div>
                <div className="new">Rs.299</div>
                <Link style={{ "text-decoration": "none" }} to="/payments">
                  <div className="buy">Buy Now</div>
                </Link>
              </div>
            </Card>
          </div>
        </Grid>
      </div>
      <hr className="line-home" />
      <div className="upcoming-heading">
        <div>Upcoming Events</div>
      </div>
      <div className="courses">
        <Grid container direction="row" justify="center" alignItems="center">
          <div className="course">
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={e2} />
              <CardContent className="card-content">
                CROSS24 is a day long hackthon which is organised be Crossroads.
                Each will be give problems and will have to use Technology to
                solve the problem.Top 10 soultions will be sponsered by
                Crossroads and makers will get free mentoring from them.
              </CardContent>
              <div className="prices">
                <div className="buy">Register</div>
              </div>
            </Card>
          </div>
          <div className="course">
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={e1}
                title="React.js"
              />
              <CardContent className="card-content">
                5 Hours of Continuous Coding to use and showcase your coding
                skills. You will be participating as a Team of 3 individuals and
                the best one will be awarded prizes worth 5000K. This is
                completely free and you can code in your favorite language
              </CardContent>
              <div className="prices">
                <div className="buy">Register</div>
              </div>
            </Card>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
