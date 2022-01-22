import 'react-app-polyfill/ie11';
import React, { FC } from 'react';
import '@fortawesome/fontawesome-free/js/all';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import './App.scss';
import Welcome from './Welcome';
import Login from './Login';
import DataPage from './DataPage';

const App: FC = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Welcome</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/DataPage">DataPage</NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/DataPage">
          <DataPage />
        </Route>
        <Redirect to="/" />
        <Redirect to="/Login" />
        <Redirect to="/DataPage" />
      </Switch>
      <ToastContainer style={{ fontSize: '16px' }} theme="dark" position="bottom-right" />
    </div>
  );
};

export default App;
