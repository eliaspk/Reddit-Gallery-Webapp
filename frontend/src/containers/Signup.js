import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { authStyles } from '../styles/authModal'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
  const classes = authStyles();
  
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
  });

  const { username, email, password, re_password } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if( password === re_password ){
      signup(username, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if( isAuthenticated ) {
    return <Redirect to='/' />
  }
  if( accountCreated ) {
    return <Redirect to='/login' />
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
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="username"
                  value={username}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  onChange={e=>onChange(e)}
                />
              </Grid>
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
                  onChange={e=>onChange(e)}
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
                  onChange={e=>onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="re_password"
                  value={re_password}
                  label="Re-enter password"
                  type="password"
                  id="re_password"
                  onChange={e=>onChange(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
                <Grid item xs>
                  <Link to = "/login" className={classes.authLinks}>
                    <Typography variant="body2" color="primary">Already have an account? Sign in</Typography>
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

export default connect(mapStateToProps, { signup })(Signup);