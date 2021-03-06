import React, { useEffect, useContext } from "react";
import { Store } from "../../store";
import { Link } from "react-router-dom";
import API from "../../utils/apiHelper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import pinkImage from "../../assets/pinkDorm.png";
import gamerImage from "../../assets/gamerDorm.png";
import minImage from "../../assets/minimalDorm.png";
import Image from "material-ui-image";

const Dashboard = (props) => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  // Store the motor motions grabbed from the DB to send to the pca9685 file
  // const [robotMotions, setMotions] = useState([]);

  useEffect(() => {
    if (!state.auth.isAuthenticated) props.history.push("/login");

    API.getUser()
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }));
  }, [state, props]);

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      flexGrow: 1,

    },
  }));




  const classes = useStyles();
  return (
   
      <div className="container valign-wrapper" style={{ height: "10" }}>
        <Grid>
          <div>
            <div>
              <h5>
                <b>Welcome to DormApp, {user.name.split(" ")[0]}!</b>
              </h5>
              <p className="center">Select which theme or aesthetic matches you! </p>
              
              <Grid
                // container
                alignItems="flex"
                lassName={classes.root}
                spacing={4}
              >
                      

              
                <Grid item justify="auto" xs={12} spacing={2}>
                    <Link to="/PinkDorm">
                      <p className="center">Allout Pink</p>
                       <Image class="responsive-img" alt="pinkDorm" src={pinkImage} />
                    </Link>
                    <br></br>
                    <Link to="/MinDorm">
                      <p className="center">Minimalist</p>
                       <Image class="responsive-img" alt="minDorm" src={minImage} />
                    </Link>
                    <br></br>
                    <Link to="/GamerDorm">
                      <p className="center">Gamer</p>
                       <Image class="responsive-img" alt="gamerDorm" src={gamerImage} />
                    </Link>

                  
                  <br></br>
                  {/* <div class="video-container">
                    <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
                  </div> */}
                  {/* <img class="responsive-img" alt="battleDorm" src={battleImage} />
                  <img class="responsive-img" alt="minimalDorm" src={minImage} /> */}

                </Grid>

              </Grid>
            </div>
          </div>
          <br></br>
          
        </Grid>

        
      </div>
 
  );
};

export default Dashboard;
