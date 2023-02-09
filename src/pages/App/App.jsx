import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import StatePage from '../StatePage/StatePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
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
              '/WashingtonDC',
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
              '/NewHampshire',
              '/NewJersey',
              '/NewMexico',
              '/NewYork',
              '/NorthCarolina',
              '/NorthDakota',
              '/Ohio',
              '/Oklahoma',
              '/Oregon',
              '/Pennsylvania',
              '/RhodeIsland',
              '/SouthCarolina',
              '/SouthDakota',
              '/Tennessee',
              '/Texas',
              '/Utah',
              '/Vermont',
              '/Virginia',
              '/Washington',
              '/WestVirginia',
              '/Wisconsin',
              '/Wyoming',
            ]}
          >
            <StatePage user={user} />
          </Route>
          <Route path="/">
            <DashboardPage user={user} />
          </Route>
          <Navigate to="/" />
        </Routes>
        <Footer />
      </>
    </main>
  );
}
