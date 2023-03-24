import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<NavBar user={user} setUser={setUser} />}>
            <Route path="/" element={<DashboardPage user={user} />} />
            {[
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
            ].map((path, index) => {
              return (
                <Route
                  key={index}
                  path={path}
                  element={<StatePage user={user} />}
                />
              );
            })}
          </Route>
        </Routes>
        <Footer />
      </>
    </main>
  );
}
