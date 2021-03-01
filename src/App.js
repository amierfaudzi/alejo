import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Resources from './pages/Resources/Resources';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/Resources" component={Resources}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
