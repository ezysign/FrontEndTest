import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography,Button } from '@material-ui/core';
import { logoutAction } from './../../actions/authActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
 
  title: {
    flexGrow: 1,
  },
  appBar: {
      backgroundColor:"#0a614d",
  }
}));

export default function Navbar() {
    const classes = useStyles();
    const dispatch = useDispatch();

  return (
    
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            
                <Typography variant="h6" className={classes.title}>
                        Frontend Testing
                </Typography>
                <Button onClick={()=>dispatch(logoutAction())} color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    
  );
}