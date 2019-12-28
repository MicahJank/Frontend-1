import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashStudent from './components/DashStudent';
import DashHelper from './components/DashHelper';
import './App.css';

function App() {
  const userType = useSelector(state => state.LoginReducer.userType);
  console.log("the usertype is", userType);

  //const store = useStore();
  //console.log('The store have states', store.getState().LoginReducer);

  return (
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
    </main>
  );
}

export default App;