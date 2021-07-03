import './App.css';
import Dashboard from './pages/Dashboard';
import { Layout } from './Layout';
import { Route } from 'react-router';
import TestPage from './pages/TestPage'


function App() {
  return (
      <>
          <TestPage/>
      </>
  )
}

export default App;


// <Layout>
//     <Route exact path='/' component={Dashboard} />
// </Layout>