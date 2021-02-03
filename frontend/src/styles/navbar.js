import { makeStyles } from '@material-ui/core';

export const navbarStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    color:'black',
    textDecoration: 'none',
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  modal: {
    display: 'flex'
  }
  
}));