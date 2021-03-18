import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import { gql, useQuery } from '@apollo/client';

// const USERS_QUERY = gql`
// query {
//   users{
//     firstName
//     lastName
//   }
// }`

// const USER_LOGIN = gql`
// query Login($email: String! $password: String!){
//     login(loginInput: {email: $email, password: $password}){
//         token,
//         user {
//           firstName,
//           about
//         }
//     }
// }`

function App() {

  // // const {loading, error, data} = useQuery(USERS_QUERY, {});
  // const {loading, error, data} = useQuery(USER_LOGIN, {
  //   variables: {
  //   email: "xi.bowving@mail.com",
  //   password: "abc123"
  // }});

  // if(data){
  //   console.log(data.login, loading, error);
  // }

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/resources" component={Resources}/>
        <Route path="/users" component={Users}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
