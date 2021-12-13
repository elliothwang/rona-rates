import './App.css';
import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import StatePage from '../StatePage/StatePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// TODO: fix two-word state routes (i.e. New York);
// TODO: add loader screen;
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Fragment>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route
            path={[
              '/Alabama',
              '/Alaska',
              '/Arizona',
              '/Arkansas',
              '/California',
              '/Colorado',
              '/Connecticut',
              '/Delaware',
              '/Washington%20DC',
              '/Florida',
              '/Georgia',
              '/Hawaii',
              '/Idaho',
              '/Illinois',
              '/Indiana',
              '/Iowa',
              '/Kansas',
              '/Kentucky',
              '/Louisiana',
              '/Maine',
              '/Maryland',
              '/Massachusetts',
              '/Michigan',
              '/Minnesota',
              '/Mississippi',
              '/Missouri',
              '/Montana',
              '/Nebraska',
              '/Nevada',
              '/New%20Hampshire',
              '/New%20Jersey',
              '/New%20Mexico',
              '/New%20York',
              '/North%20Carolina',
              '/North%20Dakota',
              '/Ohio',
              '/Oklahoma',
              '/Oregon',
              '/Pennsylvania',
              '/Rhode%20Island',
              '/South%20Carolina',
              '/South%20Dakota',
              '/Tennessee',
              '/Texas',
              '/Utah',
              '/Vermont',
              '/Virginia',
              '/Washington',
              '/West%20Virginia',
              '/Wisconsin',
              '/Wyoming',
            ]}
          >
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
