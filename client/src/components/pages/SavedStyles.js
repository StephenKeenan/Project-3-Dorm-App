import React, { useEffect, useState, useContext } from "react";
import { Store } from "../../store";
// import { Link } from "react-router-dom";
import API from "../../utils/apiHelper";
import { makeStyles } from "@material-ui/core/styles";
import pinkImage from "../../assets/pinkDorm.png";
import { Icon, Button, Grid, Container, ButtonGroup, Card, CardContent } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { text } from "body-parser";



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

  

  const motionBtn = (e) => {
    e.preventDefault();
    API.postDormChoices({
      motions: {
        channel: e.currentTarget.getAttribute("channel"),
        pulse: e.currentTarget.getAttribute("pulse"),
      },
    })
      .then()
      .catch((err) => ({ err }));
   
  };

  const deleteBtn = (e, id) => {
    e.preventDefault();
    console.log(id)
    API.deleteFavorites(
      id
    )
      .then(res => loadFavorites())
      .catch((err) => ({ err }));
 
  };

  const loadFavorites = () => {
    API.getFavorites()
      .then((choices) => {
        setFavorites(choices.data);
        console.log(choices.data);
      })
      .catch((err) => console.log({ err }));
  }


  
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
            <p style={{ fontWeight: 600, textAlign: 'center' }}>Your Saved Items!</p>
          </h4>
          <img class="responsive-img" alt="dormChoices" src={pinkImage} />
        </Grid>
        <Grid item>
          <br></br>
          <h5>
            <b>{user.name.split(" ")[0]}</b>, your saved choices are below:
            </h5>

        </Grid>

        <Grid item xs={6}>
          <div className="left orange-text 20px">
            <ul>
              <li>
              <a rel="noopener noreferrer" href="https://www.amazon.com/Jinzio-Computer-Office-Chair-Cover/dp/B07T6FVCZF/ref=sr_1_2?dchild=1&keywords=pink+desk+chair+covers+stretchable&qid=1614996292&sr=8-2" target="_blank">Fuzzy Chair Cover</a></li>
              <li><a rel="noopener noreferrer" href="https://www.amazon.com/Jinzio-Computer-Office-Chair-Cover/dp/B07T6FVCZF/ref=sr_1_2?dchild=1&keywords=pink+desk+chair+covers+stretchable&qid=1614996292&sr=8-2" target="_blank">Pink Pillows</a></li>
              <li><a rel="noopener noreferrer" href="https://www.amazon.com/Jinzio-Computer-Office-Chair-Cover/dp/B07T6FVCZF/ref=sr_1_2?dchild=1&keywords=pink+desk+chair+covers+stretchable&qid=1614996292&sr=8-2" target="_blank">Pink Throw Blanke</a></li>
              <li><a rel="noopener noreferrer" href="https://www.amazon.com/Jinzio-Computer-Office-Chair-Cover/dp/B07T6FVCZF/ref=sr_1_2?dchild=1&keywords=pink+desk+chair+covers+stretchable&qid=1614996292&sr=8-2" target="_blank">Flowers in Vase</a></li>
              <li><a rel="noopener noreferrer" href="https://www.amazon.com/Jinzio-Computer-Office-Chair-Cover/dp/B07T6FVCZF/ref=sr_1_2?dchild=1&keywords=pink+desk+chair+covers+stretchable&qid=1614996292&sr=8-2" target="_blank">Neon Desk Light</a></li>
 
            
            

            </ul>
          </div>
        </Grid>


      </Grid>
    </Container>
  );
};

export default SavedStyles;
