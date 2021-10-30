import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import StatePage from '../StatePage/StatePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
const axios = require('axios').default;

export default function App() {
  const [user, setUser] = useState(getUser());
  const [userLocationData, setUserLocationData] = useState([]);

  function location() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}-&localityLanguage=en`)
            .then(res => {
              const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
              setUserLocationData(apiDataArr);
              console.log(apiDataArr[11].val);
              console.log(apiDataArr[14].val.administrative[2].name);
            })
            .catch(err => {
              console.log(err);
            });
      });
    } else {
      console.log("Not Available");
    }
  }
  
  useEffect(() => location() , []);
    
  return (
    <main className="App">
      <Fragment>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/:state">
            <StatePage user={user} userLocationData={userLocationData} />
          </Route>
          <Route path="/">
            <DashboardPage user={user} userLocationData={userLocationData} />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Fragment>
    </main>
  );
}
