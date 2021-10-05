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
  const [popUpStatus, setPopUpStatus] = useState("hidden");
  
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

  function openAuth() {

  }

  function closeAuth() {

  }
  
  return (
    <main className="App">
      <Fragment>
        <NavBar 
          user={user} 
          setUser={setUser} 
          popUpStatus={popUpStatus} 
          setPopUpStatus={setPopUpStatus}
        />
        <div className="authPopUpContainer">
          <div className="authPopUp">
            <div className="closeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="3.5vmin" height="3.5vmin" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
            <div className="authPage">
              <AuthPage />
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/me">
            <MyCountyPage user={user}/>
          </Route>
          <Route path="/:name">
            <StatsPage apiData={apiData}/>
          </Route>
          {/* <Route path="/login">
            <AuthPage setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <AuthPage setUser={setUser}/>
          </Route> */}
          <Route path="/">
            <DashboardPage/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Fragment>
      
    </main>
  );
}
