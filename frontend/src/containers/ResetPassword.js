import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

import { Button, TextField, Grid, Box, Typography,
  Container, CssBaseline, } from '@material-ui/core';

import { authStyles } from '../styles/authModal' 

const ResetPassword = ({ reset_password }) => {
  const classes = authStyles();

  const [requestSent, setRequestSent] = useState(false);
  
  const [formData, setFormData] = useState({
    email: ''
  });
  const { email } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if(requestSent) {
    return <Redirect to='/'/>;
  }

  return (
    <React.Fragment>

        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Request Password Reset
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
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Reset Password
              </Button>
            </form>
          </div>
          <Box mt={5}>
          </Box>
        </Container>
    </React.Fragment>
  );
};

export default connect(null, { reset_password })(ResetPassword);