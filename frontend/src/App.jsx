import './App.css';
import Dashboard from './Dashboard';
import { Layout } from './Layout';
import { Route } from 'react-router';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from './components/Loading'
import AuthButton from './components/AuthButton';

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
    <Layout>
      <AuthButton />
      <button onClick={getToken}>Gettoken</button>
      <Route exact path='/' component={Dashboard} />
    </Layout>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loading />,
});
