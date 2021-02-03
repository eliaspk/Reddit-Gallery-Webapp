import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import { navbarStyles } from "../styles/navbar"
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated, isLoading }) => {
  const classes = navbarStyles();
  const guestLinks = () => (
    <React.Fragment>
      <Button component={Link} to={'/login'} color="primary" variant="contained" className={classes.link}>
      Log In
      </Button>
      <Button component={Link} to={'/signup'} color="primary" variant="outlined" className={classes.link}>
        Sign Up
      </Button>
    </React.Fragment>
  );

  const authLinks = () => (
    <Button onClick={logout} color="primary" variant="contained" className={classes.link}>
      Logout
    </Button>
  );
  
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to={'/'} className={classes.toolbarTitle} >
            <Typography variant="h6" color="inherit" noWrap>
              RedditGallery
            </Typography>
          </Link>

          {
            isAuthenticated ? 
              (isLoading ? null : authLinks()) :
              (isLoading ? null : guestLinks())
          }
        
        </Toolbar>
      </AppBar>


    </React.Fragment>
  );
};

const mapStatetoProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
});

export default connect(mapStatetoProps, { logout })(Navbar);