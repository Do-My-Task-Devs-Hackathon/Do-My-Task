import './App.css';
import Dashboard from './pages/Dashboard';
import { Layout } from './Layout';
import { Route } from 'react-router';

function App() {
  return (
    <Layout>
      <Route exact path='/' component={Dashboard} />
    </Layout>
  );
}

export default App;
