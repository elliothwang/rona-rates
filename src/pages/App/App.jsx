import './App.css';
import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import StatePage from '../StatePage/StatePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Fragment>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/:state">
            <StatePage user={user} />
          </Route>
          <Route path="/">
            <DashboardPage user={user} />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Fragment>
    </main>
  );
}
