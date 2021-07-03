import './App.css';
import Dashboard from './pages/Dashboard';
import { Layout } from './Layout';
import { Route, Link } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from './components/Loading'
import AuthButton from './components/AuthButton';

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Zoom from '@material-ui/core/Zoom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontSize: "20px",
    position: "relative",
    textAlign: "center",

  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function App() {
  const classes = useStyles();

  const { isLoading, getAccessTokenSilently } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  const getToken = async() => {
    const token = await getAccessTokenSilently();
    console.log(token);
  }
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className="">
        <Toolbar>
          <a href="/" className="navbar-brand">
            Logo
            {/* <img src={logo} style={{width:"200px", paddingRight:"20px"}} alt="dmtLogo"/> */}
          </a>
          <Typography variant="h6" className={classes.title}>
            Project Title
          </Typography>
          <Typography variant="h6">
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
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
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <button onClick={getToken}>Gettoken</button>
        <Layout>
          
          <Route exact path='/' component={Dashboard} />
        </Layout>
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
    
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loading />,
});
