import React, { useEffect, useContext, useState } from "react";
import { Store } from "../../store";
import { Link } from "react-router-dom";
import DormContext from "../../utils/dormContext";
import API from "../../utils/apiHelper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import pinkImage from "../../assets/pinkDorm.png";
import gamerImage from "../../assets/gamerDorm.png";
// import minImage from "../../assets/minimalDorm.png";


const GamerDorm = (props) => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  
  const [dormChoices, setMotions] = useState([]);

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
    <DormContext.Provider value={{ dormChoices }}>
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

                    <div className="center orange-text">Gamer
                          <img class="responsive-img" alt="battleDorm" src={gamerImage} />
                    </div>



                  {/* </Link> */}



                  <br></br><br></br>
                  


                </Grid>

              </Grid>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br>
        </Grid>

        
      </div>
    </DormContext.Provider>
  );
};

export default GamerDorm;
