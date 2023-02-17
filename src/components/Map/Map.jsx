import './Map.css';
import React, { useState, useEffect } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import StateMap from '../StateMap/StateMap';
import USMap from '../USMap/USMap';
import MapNavBar from '../MapNavBar/MapNavBar';
const axios = require('axios').default;

// ! FIX change reacttooltip to material tooltip

export default function Map({ onDashboard, user }) {
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [userLocation, setUserLocation] = useState('');
  const [content, setContent] = useState('');
  const [legendShown, setLegendShown] = useState(true);
  const [countiesShown, setCountiesShown] = useState(false);

  // useEffect(() => {
  //   function location() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         const lat = position.coords.latitude;
  //         setUserLat(lat);
  //         const long = position.coords.longitude;
  //         setUserLong(long);
  //         axios
  //           .get(
  //             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}-&localityLanguage=en`
  //           )
  //           .then((res) => {
  //             const apiDataArr = Object.entries(res.data).map(
  //               ([stat, val]) => ({ stat, val })
  //             );
  //             setUserLocation(
  //               `${apiDataArr[11].val}, ${apiDataArr[14].val.administrative[2].name}`
  //             );
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       });
  //     }
  //   }
  //   setTimeout(() => user && location(), 750);
  // }, [user]);

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
            ReactTooltipContent={content}
            setReactTooltipContent={setContent}
          />
          {/* <a
            data-tooltip-id="content"
            data-tooltip-content={content}
            data-tooltip-place="top"
          ></a>
          <ReactTooltip className="flex-ctr-ctr" id="content" /> */}
        </>
      ) : (
        <>
          <StateMap
            user={user}
            userLat={userLat}
            userLong={userLong}
            userLocation={userLocation}
            // casesShown={casesShown}
            setReactTooltipContent={setContent}
          />
          {/* <a
            data-tooltip-id="content"
            data-tooltip-content={content}
            data-tooltip-place="top"
          ></a>
          <ReactTooltip id="content" /> */}
        </>
      )}
    </div>
  );
}
