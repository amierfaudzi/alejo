import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Resources from './pages/Resources/Resources';
import Guides from './pages/Guides/Guides';
import { gql, useMutation, useQuery } from '@apollo/client';

const USER_QUERY = gql`
query {
  users{
    firstName
    lastName
  }
}`

const exampleUser = {
  email: "xi.bowving@mail.com",
  password: "abc123"
}

const USER_LOGIN = gql`
query Login($email: String! $password: String!){
    login(loginInput: {email: $email, password: $password}){
        token,
        user {
          firstName,
          about
        }
    }
}`

function App() {

  // const {loading, error, data} = useQuery(USER_QUERY, {});
  const {loading, error, data} = useQuery(USER_LOGIN, {
    variables: {
    email: "xi.bowving@mail.com",
    password: "abc123"
  }});

  if(data){
    console.log(data.login, loading, error);
  }

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
