import './App.css';
import HospitalAvailability from './pages/HospitalAvailability';
import UserLogin from './pages/UserLogin';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <UserLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
