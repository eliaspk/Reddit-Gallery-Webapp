import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

import { Button, TextField, Grid, Box, Typography,
  Container, CssBaseline, } from '@material-ui/core';

import { authStyles } from '../styles/authModal' 

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const classes = authStyles();

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
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
                    name="new_password"
                    value={new_password}
                    label="New Password"
                    type="password"
                    id="password"
                    onChange={e => onChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="re_new_password"
                    value={re_new_password}
                    label="Confirm New Password"
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);