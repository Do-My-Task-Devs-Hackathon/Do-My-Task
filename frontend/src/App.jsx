import './App.css';
import Dashboard from './pages/Dashboard';
import { Layout } from './Layout';
import { Route } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from './components/Loading'
import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';

function App() {

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
        <Container>
          <NavBar />
          <button onClick={getToken}>Gettoken</button>
          <Layout>
            <Route exact path='/' component={Dashboard} />
          </Layout>
        </Container>
    </React.Fragment>
    
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loading />,
});
