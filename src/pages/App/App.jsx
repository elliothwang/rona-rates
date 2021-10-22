import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import MyCountyPage from '../MyCountyPage/MyCountyPage';
import StatsPage from '../StatsPage/StatsPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
const axios = require('axios').default;


export default function App() {
  const [user, setUser] = useState(getUser());
  const [allStatesData, setAllStatesData] = useState([]);
  
  function getAllStatesData() {
    axios.get('https://corona.lmao.ninja/v2/states?sort&yesterday')
    .then(res => {
      setAllStatesData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getAllStatesData(), []);
  
  return (
    <main className="App">
      <Fragment>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/me">
            <MyCountyPage user={user} allStatesData={allStatesData} />
          </Route>
          <Route path="/:state">
            <StatsPage allStatesData={allStatesData} />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Fragment>
    </main>
  );
}
