import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import { useState } from 'react';
import SignUp from './pages/SignUp/SignUp';

function App() {

  const [token, setToken] = useState('');

  return (
    <Router>
      <Header token={token} setToken={setToken}/>
      <Switch>
        <Route path="/resources" render={() => <Resources token={token} />}/>
        <Route path="/users" render={() => <Users token={token} />}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" render={() => <Login setToken={setToken} />}/>
        <Route path="/signup" render={() => <SignUp setToken={setToken} />}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
