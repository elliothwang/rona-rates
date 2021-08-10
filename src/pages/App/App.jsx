import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Stats from '../Stats/Stats';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <Fragment>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Fragment>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
