import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, TextField, Grid, Box, Typography,
  Modal, Container, CssBaseline, } from '@material-ui/core';

import { authStyles } from '../styles/authModal' 

const Login = ({ login, isAuthenticated }) => {
  const classes = authStyles();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if(isAuthenticated) {
    return <Redirect to='/'/>;
  }

  return (
    <React.Fragment>

        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={e => onChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    value={password}
                    label="Password"
                    type="password"
                    id="password"
                    onChange={e => onChange(e)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to = "/reset-password" className={classes.authLinks}>
                    <Typography variant="body2" color="primary">Forgot your password?</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to = "/signup" className={classes.authLinks}>
                    <Typography variant="body2" color="primary">Don't have an account? Sign Up</Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
          </Box>
        </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);