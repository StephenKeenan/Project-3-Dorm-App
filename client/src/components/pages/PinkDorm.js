import React, { useEffect, useContext, useState } from "react";
import { Store } from "../../store";
import { Link } from "react-router-dom";
import DormContext from "../../utils/dormContext";
import API from "../../utils/apiHelper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import pinkImage from "../../assets/pinkDorm.png";
// import gamerImage from "../../assets/gamerDorm.png";
// import minImage from "../../assets/minimalDorm.png";
// import Image from "material-ui-image";
// import Application from "./components/pages/Application"

const PinkDorm = (props) => {
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
              <Grid container spacing={3}>                      
             

                <Grid item xs={12}>                  
                    <div className="center orange-text">All Out Pink
                       <img className="responsive-img" alt="pinkDorm" src={pinkImage} />                      
                    </div>
                </Grid>
                <Grid item xs={6}>
                <div className="left orange-text 20px">
                  <ul>
                    <li>[  ] Fuzzy Chair Cover</li>
                    <li>[  ] Pink Pillows</li>
                    <li>[  ] Pink Throw Blanket</li>
                    <li>[  ] Heart Wall Art</li>
                    <li>[  ] Pink Carpet</li>
                    <li>[  ] Flowers in Vase</li>
                    <li>[  ] Neon Desk Light</li>
                    <li>[  ] Draping Wall Lights</li>                
                                     
                 </ul>
                   </div>    
                </Grid>                 


                                    
              </Grid>
            </div>
          </div>
         
        </Grid>

        
      </div>
    </DormContext.Provider>
  );
};

export default PinkDorm;