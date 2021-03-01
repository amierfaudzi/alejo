import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>

  );
}

export default App;
