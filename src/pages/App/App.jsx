import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import StatsPage from '../StatsPage/StatsPage';
import DashboardPage from '../DashboardPage/DashboardPage';
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
              <StatsPage />
            </Route>
            <Route path="/">
              <DashboardPage />
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
