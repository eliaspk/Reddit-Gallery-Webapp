import { makeStyles } from '@material-ui/core';

export const authStyles = makeStyles((theme) => ({
  container: {
    borderRadius: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    margin: 'auto'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    display: 'flex'
  },
  authLinks: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
   },
  },
}));