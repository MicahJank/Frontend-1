import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './webpages/HomePage';
import LoginPage from './webpages/LoginPage';
import RegisterPage from './webpages/RegisterPage';
import DashStudent from './webpages/DashStudent';
//import DashHelper from './webpages/DashHelper';
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
      {/* To do: Add a check user type to render the proper component to the dashboard */}
      {userType === "Student" 
        ? <PrivateRoute exact path="/dashboard" component={DashStudent} /> 
        : null
      }
    </main>
  );
}

export default App;