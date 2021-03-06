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

const PinkDorm = (props) => {
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
                            <b className="center">Build Your Dormroom, {user.name.split(" ")[0]}!</b>
                        </h5>
                        <p className="center">Select which items you want! </p>

                        <Grid
                            container
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
                                {/* <Link to="http://www.uga.edu">
                      <p className="center">Minimalist</p>
                       <Image class="responsive-img" alt="minDorm" src={minImage} />
                    </Link>
                    <br></br>
                    <Link to="/GamerDorm">
                      <p className="center">Gamer</p>
                       <Image class="responsive-img" alt="gamerDorm" src={gamerImage} />
                    </Link> */}
                                <a rel="choice link" target="_blank" href="https://www.amazon.com/Decorative-Romantic-Chiffon-Pillowcase-Bedroom/dp/B07BYTNZDX/ref=sr_1_21?crid=2J759UR6206E9&dchild=1&keywords=pink+fluffy+pillow&qid=1614996387&sprefix=pink+fluffy%2Caps%2C201&sr=8-21">Pink Pillows +</a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="https://www.amazon.com/BEDELITE-Fleece-Blankets-Microfiber-Blanket/dp/B08FY98P4N/ref=sr_1_10?crid=3LCO1DG2YGN7F&dchild=1&keywords=pink+throw+blankets&qid=1614996034&sprefix=pinkthrow+%2Caps%2C203&sr=8-10">Pink Throw Blanket +</a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="https://www.amazon.com/Ciicool-Sheepskin-Fluffy-Bedroom-Living/dp/B08661PNRS/ref=sr_1_3?dchild=1&keywords=pink+fuzzy+chair+cover&qid=1615038996&sr=8-3">Pink Fuzzy Chair Cover  +</a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="https://www.amazon.com/SSLine-Modern-Armchair-Bedroom-Dressing/dp/B08MTV2VS9/ref=sr_1_10?dchild=1&keywords=pink+fuzzy+chair&qid=1615039037&sr=8-10">Pink Fuzzy Chair +</a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="https://www.amazon.com/Battery-Operation-Decoration-Bedroom-Birthday/dp/B08R55RKQY/ref=sr_1_3_sspa?crid=20C2E8AP267D0&dchild=1&keywords=heart+neon+sign&qid=1615039118&sprefix=heart+neon+%2Caps%2C197&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOTBVT0dSMEdaWEhKJmVuY3J5cHRlZElkPUEwOTcwMDU4MVhJTkhWVzhUWDNUTCZlbmNyeXB0ZWRBZElkPUEwOTkyMjg5M09HRTdWR0lDN1lXUyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">Heart Neon Light +</a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="https://www.amazon.com/ECLIPSE-Blackout-Curtains-Bedroom-Insulated/dp/B01GSP6N2Y/ref=sr_1_1?crid=SK7B1WT7UWVN&dchild=1&keywords=pink+curtain&qid=1615041573&sprefix=pink+curtain%2Caps%2C218&sr=8-1">Pink Curtains </a>

                                <br></br>

                                <a rel="choice link" target="_blank" href="">Pink Carpet </a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="">Heart Wall Art </a>
                                <br></br>
                                <a rel="choice link" target="_blank" href="">Floral Magnets </a>
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

export default PinkDorm;