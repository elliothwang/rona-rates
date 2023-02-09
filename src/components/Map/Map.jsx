import './Map.css';
import React, { useState, useEffect } from 'react';
import * as ReactTooltip from 'react-tooltip';
import StateMap from '../StateMap/StateMap';
import USMap from '../USMap/USMap';
import MapNavBar from '../MapNavBar/MapNavBar';
const axios = require('axios').default;

export default function Map({ onDashboard, user }) {
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [userLocation, setUserLocation] = useState('');
  const [content, setContent] = useState('');
  const [legendShown, setLegendShown] = useState(true);
  const [countiesShown, setCountiesShown] = useState(false);

  useEffect(() => {
    function location() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          setUserLat(lat);
          const long = position.coords.longitude;
          setUserLong(long);
          axios
            .get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}-&localityLanguage=en`
            )
            .then((res) => {
              const apiDataArr = Object.entries(res.data).map(
                ([stat, val]) => ({ stat, val })
              );
              setUserLocation(
                `${apiDataArr[11].val}, ${apiDataArr[14].val.administrative[2].name}`
              );
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    }
    setTimeout(() => user && location(), 750);
  }, [user]);

  return (
    <div className="mapContainer flex-ctr-ctr">
      <MapNavBar
        onDashboard={onDashboard}
        legendShown={legendShown}
        setLegendShown={setLegendShown}
        // casesShown={casesShown}
        // setCasesShown={setCasesShown}
        countiesShown={countiesShown}
        setCountiesShown={setCountiesShown}
      />
      {onDashboard ? (
        <>
          <USMap
            user={user}
            userLat={userLat}
            userLong={userLong}
            userLocation={userLocation}
            // casesShown={casesShown}
            countiesShown={countiesShown}
            tooltipContent={content}
            setTooltipContent={setContent}
          />
          <ReactTooltip className="flex-ctr-ctr">{content}</ReactTooltip>
        </>
      ) : (
        <>
          <StateMap
            user={user}
            userLat={userLat}
            userLong={userLong}
            userLocation={userLocation}
            // casesShown={casesShown}
            setTooltipContent={setContent}
          />
          <ReactTooltip className="flex-ctr-ctr">{content}</ReactTooltip>
        </>
      )}
    </div>
  );
}
