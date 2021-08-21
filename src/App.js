import './App.css';
import UserLogin from './pages/UserLogin';
import Landing from './pages/Landing';
import TestBooking from './pages/TestBooking';
import MapPage from './pages/MapPage';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import BookingConfirmation from './pages/BookingConfirmation';
import ReCheckBooking from './pages/ReCheckBooking';
import { TimeSlot } from './components/HospitalAvailability/TimeSlot.js';
import PickTime from './pages/PickTime';
import { useState } from 'react';

function App() {

  const [AvailableTimeSlot, setavailableTimeSlot] = useState(TimeSlot);

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
          <Route exact path='/booking/:time/recheck'>
            <ReCheckBooking />
          </Route>
          <Route exact path="/booking/:time/confirmation">
            <BookingConfirmation />
          </Route>
          <Route exact path='/map'>
            <MapPage />
          </Route>
          <Route exact path='/booking/selectTime'>
            <PickTime data={AvailableTimeSlot} />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
