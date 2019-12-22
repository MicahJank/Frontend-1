import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './webpages/HomePage';
import LoginPage from './webpages/LoginPage';
import RegisterPage from './webpages/RegisterPage';
import DashStudent from './webpages/DashStudent';
import DashHelper from './webpages/DashHelper';
import './App.css';

function App() {
  return (
    <main className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/student-dashboard" component={DashStudent} />
      <PrivateRoute exact path="/helper-dashboard" component={DashHelper} />
    </main>
  );
}

export default App;
