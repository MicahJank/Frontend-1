import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashStudent from './components/DashStudent';
import DashHelper from './components/DashHelper';
import DashStudentTickets from './components/DashStudentTickets';
import DashHelperTickets from './components/DashHelperTickets';
import TicketForm from './components/tickets/TicketForm';
import './App.css';

function App() {
  const userType = useSelector(state => state.LoginReducer.userType);
  //console.log("the usertype is", userType);

  const store = useStore();
  console.log('The store have states', store.getState().TicketsReducer);

  return (
    <Router>
      <main className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        {/* 
          Find a way to better control how to reach target dashboard;
          Extra user type cases: what if back end adds an extra user type 
          which is not reflected in front end? Null is not a default type here
        */}
        <PrivateRoute exact path="/dashboard" component={() => {
          switch(userType) {
            case "Student": 
              return <DashStudent />
            case "Helper": 
              return <DashHelper />
            default: 
              return null;
          }
        }} />

        <PrivateRoute exact path="/dashboard/tickets" component={() => {
          switch(userType) {
            case "Student": 
              return <DashStudentTickets />
            case "Helper": 
              return <DashHelperTickets />
            default: 
              return null;
          }
        }} />

        <PrivateRoute exact path="/dashboard/post" component={TicketForm} />
      </main>
    </Router>
  );
}

export default App;