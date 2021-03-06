import React, { useEffect, useState, useContext } from "react";
import { Store } from "../../store";
// import { Link } from "react-router-dom";
import API from "../../utils/apiHelper";
import { makeStyles } from "@material-ui/core/styles";
import pinkImage from "../../assets/pinkDorm.png";
import { Icon, Button, Grid, Container, ButtonGroup, Card, CardContent } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { text } from "body-parser";
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    background: "gray",
    borderRadius: 5,
    border: 0,
    color: "white",
    height: "50px",
    padding: "auto",
    boxShadow: "0 3px 5px 2px rgba(59, 58, 50, .3)",
    margin: "5px",
  },
  label: {
    textTransform: "capitalize",
  },
}));

// export default function Checkboxes() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };
// }

const SavedStyles = (props) => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!state.auth.isAuthenticated) props.history.push("/login");

    API.getUser()
      .then((res) => console.log({ res }))
      .catch((err) => console.log({ err }));
  }, [state, props]);

  // const onLogoutClick = (e) => {
  //   e.preventDefault();

  //   logoutUser(props.history)(dispatch);
  // };

  const motionBtn = (e) => {
    e.preventDefault();
    API.postRobotMotions({
      motions: {
        channel: e.currentTarget.getAttribute("channel"),
        pulse: e.currentTarget.getAttribute("pulse"),
      },
    })
      .then()
      .catch((err) => ({ err }));
    // console.log(
    //   e.currentTarget.getAttribute("channel"),
    //   e.currentTarget.getAttribute("pulse")
    // );
  };

  const deleteBtn = (e, id) => {
    e.preventDefault();
    console.log(id)
    API.deleteFavorites(
      id
    )
      .then(res => loadFavorites())
      .catch((err) => ({ err }));
    // console.log(
    //   e.currentTarget.getAttribute("channel"),
    //   e.currentTarget.getAttribute("pulse")
    // );
  };

 const loadFavorites = () => {
    API.getFavorites()
      .then((motions) => {
        setFavorites(motions.data);
        console.log(motions.data);
      })
      .catch((err) => console.log({ err }));
  }


  // Run a GET request on the page load to grab the motor motions saved in the DB
  useEffect(() => {
    loadFavorites();
  }, [

  ]);
  console.log("my favorites" + favorites)


  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="row">
        <Grid item>
            <h4>
              <p style={{ fontWeight:600, textAlign:'center' }}>Your Saved Choices!</p>
            </h4>
            <img class="responsive-img" alt="pinkDorm" src={pinkImage} />
            <a rel="choice link" target="_blank" href="https://www.amazon.com/Decorative-Romantic-Chiffon-Pillowcase-Bedroom/dp/B07BYTNZDX/ref=sr_1_21?crid=2J759UR6206E9&dchild=1&keywords=pink+fluffy+pillow&qid=1614996387&sprefix=pink+fluffy%2Caps%2C201&sr=8-21">Pink Pillows </a>
            <br></br>
            <a rel="choice link" target="_blank" href="https://www.amazon.com/BEDELITE-Fleece-Blankets-Microfiber-Blanket/dp/B08FY98P4N/ref=sr_1_10?crid=3LCO1DG2YGN7F&dchild=1&keywords=pink+throw+blankets&qid=1614996034&sprefix=pinkthrow+%2Caps%2C203&sr=8-10">Pink Throw Blanket </a>
            <br></br>
            <a rel="choice link" target="_blank" href="https://www.amazon.com/Ciicool-Sheepskin-Fluffy-Bedroom-Living/dp/B08661PNRS/ref=sr_1_3?dchild=1&keywords=pink+fuzzy+chair+cover&qid=1615038996&sr=8-3">Pink Fuzzy Chair Cover </a>
            <br></br>
            <a rel="choice link" target="_blank" href="https://www.amazon.com/SSLine-Modern-Armchair-Bedroom-Dressing/dp/B08MTV2VS9/ref=sr_1_10?dchild=1&keywords=pink+fuzzy+chair&qid=1615039037&sr=8-10">Pink Fuzzy Chair </a>
            <br></br>
            <a rel="choice link" target="_blank" href="https://www.amazon.com/Battery-Operation-Decoration-Bedroom-Birthday/dp/B08R55RKQY/ref=sr_1_3_sspa?crid=20C2E8AP267D0&dchild=1&keywords=heart+neon+sign&qid=1615039118&sprefix=heart+neon+%2Caps%2C197&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOTBVT0dSMEdaWEhKJmVuY3J5cHRlZElkPUEwOTcwMDU4MVhJTkhWVzhUWDNUTCZlbmNyeXB0ZWRBZElkPUEwOTkyMjg5M09HRTdWR0lDN1lXUyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">Heart Neon Light </a>
 
        
        
        
        </Grid>
        <Grid item>
        <br></br>
        {/* <h5>
              <b>{user.name.split(" ")[0]}</b>, your saved choices are below:
            </h5> */}
          {/* <Card> */}

        </Grid>
      </Grid>
    </Container>
  );
};

export default SavedStyles;
