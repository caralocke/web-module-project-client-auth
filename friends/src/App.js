import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Friends from './components/Friends';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
           <Link to='/login'>Login</Link>
           <Link>Logout</Link>
           <Link to='/friends'>Friends Page</Link>
        </header>
        <Switch>
          <Route exact path='/friends' component={Friends} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;