import React, { useEffect, useContext, useState } from "react";
import { Store } from "../../store";
// import { logoutUser } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import MotionContext from "../../utils/motionContext";
// import Pca9685 from "../../utils/pca9685";
import API from "../../utils/apiHelper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import pinkImage from "../../assets/pinkDorm.png";
import battleImage from "../../assets/battleDorm.png";
import minImage from "../../assets/minimalDorm.png";
import Image from "material-ui-image";

const Dashboard = (props) => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  // Store the motor motions grabbed from the DB to send to the pca9685 file
  const [robotMotions, setMotions] = useState([]);

  useEffect(() => {
    if (!state.auth.isAuthenticated) props.history.push("/login");

    API.getUser()
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }));
  }, [state, props]);

  // Run a GET request on the page load to grab the motor motions saved in the DB
  // useEffect(() => {
  //   API.getRobotMotions()
  //     .then((motions) => {
  //       setMotions(motions.data);
  //       console.log(motions.data);
  //     })
  //     .catch((err) => console.log({ err }));
  // }, []);
  // console.log(robotMotions);

  // const onLogoutClick = (e) => {
  //   e.preventDefault();

  //   logoutUser(props.history)(dispatch);
  // };

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      flexGrow: 1,

    },
  }));

{/* <ListItem button component={Link} to="/dashboard"></ListItem> */}

<Image
  src="http://loremflickr.com/300/200"
/>

  const classes = useStyles();
  return (
    <MotionContext.Provider value={{ robotMotions }}>
      <div className="container valign-wrapper" style={{ height: "50" }}>
        <Grid>
          <div>
            <div>
              <h5>
                <b>Welcome to DormApp, {user.name.split(" ")[0]}!</b>
              </h5>
              <p className="center">Select which aesthetic matches you! </p>
              {/* <p>Choose the save button to save favorite options. </p> */}
              <Grid
                // container
                alignItems="flex"
                lassName={classes.root}
                spacing={4}
              >
                      


                <Grid item justify="auto" xs={12} spacing={4}>
                  <img class="responsive-img" alt="pinkDorm" src={pinkImage} />
                  <div className="center">
                    <a class="waves-effect waves-light btn-small">button</a>
                    <a class="waves-effect waves-light btn-small">button</a>
                    <a class="waves-effect waves-light btn-small">button</a>
                    {/* <a class="waves-effect waves-light btn-small">button</a> */}
                  </div>
                  <br></br>
                  <div class="video-container">
                    <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
                  </div>
                  <img class="responsive-img" alt="battleDorm" src={battleImage} />
                  <img class="responsive-img" alt="minimalDorm" src={minImage} />

                </Grid>

              </Grid>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br>
        </Grid>

        {/* <Grid item justify="sm" xs={6} spacing={6}>
          <Pca9685 />
         </Grid> */}
      </div>
    </MotionContext.Provider>
  );
};

export default Dashboard;
