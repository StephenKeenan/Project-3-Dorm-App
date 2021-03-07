import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container valign-wrapper " style={{ height: '80vh' }}>
      <div className="row">
        <div className="col s12 center-align">
          <p className="orange-text flow-text bold-text text-darken-4" style={{
            font:'bold',
            fontSize: '25px',
          }}>
            Welcome to DormApp, 
            <br />
            login or create an account!
          </p>
          <br />
          <div className="col s6">
            <Link to="/register" className="btn waves-effect waves-light hoverable amber darken-4" style={{
              width: '140px',
              borderRadius: '50px',
              letterSpacing: '3px',
              font:'bold',
              color: 'black',
            }}>
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn waves-effect waves-light hoverable amber darken-4" style={{
              width: '140px',
              borderRadius: '50px',
              letterSpacing: '2px',
              font:'dark',
              color: 'black',
            }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
