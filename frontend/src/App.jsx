import './App.css';
import Dashboard from './pages/Dashboard';
import { Layout } from './Layout';
import { Route } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from './components/Loading'
import React from 'react';
import NavBar from './components/NavBar';
import AppContextProvider from './AppContextProvider';
function App() {

  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  // const { getAccessTokenSilently } = useAuth0();
  // const getToken = async() => {
  //   const token = await getAccessTokenSilently();
  //   console.log(token);
  // }
  
  function getTask() {
    AppContextProvider.getTask(1).then(data => {
       console.log(data.data); 
  });

  }

  return (
    <React.Fragment>
      <NavBar />
      
      {/* <button onClick={getToken}>Gettoken</button> */}
      <Layout>
        <Route exact path='/' component={Dashboard} />
      </Layout>
      <button onClick={getTask()}>Clickme</button>
    </React.Fragment>
    
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loading />,
});
