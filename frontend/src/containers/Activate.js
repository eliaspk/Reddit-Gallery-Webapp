import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, TextField, Grid, Box, Typography,
  Modal, Container, CssBaseline, } from '@material-ui/core';

import { authStyles } from '../styles/authModal' 

const Activate = ({ verify, match }) => {
  const classes = authStyles();

  const [verified, setVerified] = useState(false);

  const verify_account = e => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if(verified) {
    return <Redirect to='/'/>;
  }

  return (
    <React.Fragment>

        <Container className={classes.container} component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Verify you account:
            </Typography>
            
            <Button
              onClick={verify_account}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Verify
            </Button>

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

export default connect(null, { verify })(Activate);