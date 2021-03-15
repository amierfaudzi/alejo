import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Resources from './pages/Resources/Resources';
import Guides from './pages/Guides/Guides';
import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql`
{
  users{
    firstName
    lastName
  }
}`

function App() {

  const {loading, error, data} = useQuery(USER_QUERY, {});

  console.log(data, loading, error)
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/resources" component={Resources}/>
        <Route path="/guides" component={Guides}/>
        {/* For any particular Guide */}
        {/* <Route path="/guides/:id" component={Guides}/> */}
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
