import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    borderRadius: "3px",
    bottom: 0,
    background: "#2962ff",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    color: "orange"
  },
}));
const Footer = (props) => {
  // const year = new Date().getFullYear();

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="body2" align="center">
          DormApp K^2 Creations &copy; 2021 
          
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
