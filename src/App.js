import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HospitalAvailability from './pages/HospitalAvailability';
import BookingConfirmation from './pages/BookingConfirmation';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ BookingConfirmation } />
          <Route path="/hospital/availability" component={ HospitalAvailability } />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
