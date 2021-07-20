import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FriendsList from './components/FriendsList';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
           <Link to='/login'>Login</Link>
           <Link>Logout</Link>
           <Link to='/friendslist'>Friends Page</Link>
        </header>
        <Switch>
          <Route exact path='/friendslist' component={FriendsList} />
          <Route path='login' component={Login}/>
          <Route component={Login}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
