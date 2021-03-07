import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../store/actions/authActions";
import { Store } from "../../store";
import logo from "../../assets/dormlogo.png";
// import "./Navbar.css";

const Navbar = (props) => {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  const onLogoutClick = (e) => {
    e.preventDefault();

    logoutUser(history)(dispatch);
  };

  return (
    <nav>
     
      <div className="nav-wrapper blue accent-4">
        <div class= "logo">

        
        <NavLink
          to="/dashboard"
          className="brand-logo left"
          style={{
            borderRadius: "3px",
            // background: "blue",
            letterSpacing: "4px",
            marginTop: "5px",
            fontFamily: "fantasy",
            fontSize: "35px",
            color: "#ff6f00",
          }}
        >
          
          DormApp 
         
        </NavLink>
        </div>
        <ul id="nav-mobile" class="right">
          {/* <li>
            {" "}
            {state.auth.isAuthenticated ? (
              <NavLink to="/dashboard" className="orange-text">
                Dashboard
              </NavLink>
            ) : (
              " "
            )}
          </li> */}


          <li>
            {" "}
            {state.auth.isAuthenticated ? (
              <NavLink to="/saveDorm" className="orange-text">
                Saved 
              </NavLink>
            ) : (
              " "
            )}
          </li>

          <li>
            {state.auth.isAuthenticated ? (
              <a href="/" className="orange-text" onClick={onLogoutClick}>
                Logout
              </a>
            ) : (
              " "
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
