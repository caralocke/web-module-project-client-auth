import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
           <Link to='/login'>Login</Link>
           <Link to='/friendslist'>Friends Page</Link>
        </header>
        <Switch>
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path='login' component={Login}/>
          <Route component={Login}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
