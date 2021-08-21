import './App.css';
import UserLogin from './pages/UserLogin';
import Landing from './pages/Landing';
import TestBooking from './pages/TestBooking';
import MapPage from './pages/MapPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/booking">
            <TestBooking />
          </Route>
          <Route exact path="/login">
            <UserLogin />
          </Route>
          <Route exact path='/availability'>
            <HospitalAvailability />
          </Route>
          <Route exact path='/map'>
            <MapPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
