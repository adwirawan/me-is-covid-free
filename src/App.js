import './App.css';
import UserLogin from './pages/UserLogin';
import Landing from './pages/Landing';
import TestBooking from './pages/TestBooking';
import MapPage from './pages/MapPage';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import BookingConfirmation from './pages/BookingConfirmation';
import ReCheckBooking from './pages/ReCheckBooking';
import { TimeSlot } from './components/HospitalAvailability/TimeSlot.js';
import { TimeSlot2 } from './components/HospitalAvailability/TimeSlot2.js';
import PickTime from './pages/PickTime';
import HospitalAvailability from './pages/HospitalAvailability';
import HospitalLogin from './pages/HospitalLogin';

function App() {

  const AvailableTimeSlot1 = TimeSlot;

  const AvailableTimeSlot2 = TimeSlot2;

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
          <Route exact path='/booking/:siteName/:day/:time/recheck'>
            <ReCheckBooking />
          </Route>
          <Route exact path="/booking/:siteName/:day/:time/confirmation">
            <BookingConfirmation />
          </Route>
          <Route exact path='/booking/map'>
            <MapPage />
          </Route>
          <Route exact path='/booking/:siteName/selectTime'>
            <PickTime data1={AvailableTimeSlot1} data2={AvailableTimeSlot2} />
          </Route>

          <Route exact path='/hospital/login'>
            <HospitalLogin />
          </Route>
          <Route exact path='/hospital/availability'>
            <HospitalAvailability />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
