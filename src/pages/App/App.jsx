import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyCountyPage from '../MyCountyPage/MyCountyPage';
import StatsPage from '../StatsPage/StatsPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import * as covidAPI from '../../utilities/covid-api';
const axios = require('axios').default;


export default function App() {
  const [user, setUser] = useState(getUser());
  const [apiData, setApiData] = useState([]);
  
  function getUSData() {
    axios.get('https://corona.lmao.ninja/v2/states?sort&yesterday')
    .then(res => {
      setApiData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getUSData(), []);
  
  return (
    <main className="App">
      <Fragment>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route path="/mycounty">
            <MyCountyPage user={user}/>
          </Route>
          <Route path="/stats/:name">
            <StatsPage apiData={apiData}/>
          </Route>
          <Route path="/login">
            <AuthPage setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <AuthPage setUser={setUser}/>
          </Route>
          <Route path="/">
            <DashboardPage/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Fragment>
    </main>
  );
}
