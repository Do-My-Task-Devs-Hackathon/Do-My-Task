import './App.css';
import Dashboard from './pages/Dashboard';
import HostView from './pages/HostView';
import { Layout } from './Layout';
import { Route } from 'react-router';

function App() {
  return (
    <Layout>
      <Route exact path='/' component={HostView} />
    </Layout>
  );
}

export default App;
