import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './NavBar.css'
import AuthButton from './AuthButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar className="Appbar ">
          <a href="/" className="Logo">
            <img  src="https://user-images.githubusercontent.com/41566813/124341502-e38a2100-dc10-11eb-9648-c8de05097646.png" 
                  style={{width:"200px", paddingRight:"20px"}} 
                  alt="dmtLogo"/>
          </a>
          <Tabs>
            <Tab label="About"/>
          </Tabs>
          <Typography variant="h6" className="profile">
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Button variant="contained" color="default" {...bindTrigger(popupState)}>
                    <AccountCircleIcon />
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Box p={2}>
                      <AuthButton/>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
          </Typography>
      </AppBar>
      </div>
    )
}