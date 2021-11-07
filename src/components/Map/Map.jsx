import './Map.css';
import React, { useState, useEffect }  from 'react';
import ReactTooltip from "react-tooltip";
import StateMap from '../StateMap/StateMap';
import USMap from '../USMap/USMap';
const axios = require('axios').default;

export default function Map({ onDashboard, user }) {
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [userLocation, setUserLocation] = useState("");
  const [content, setContent] = useState("");
  const [legendShown, setLegendShown] = useState(true);
  const [casesShown, setCasesShown] = useState(true);
  const [countiesShown, setCountiesShown] = useState(false);

  useEffect(() => {
    function location() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            const lat = position.coords.latitude;
            setUserLat(lat);
            const long = position.coords.longitude;
            setUserLong(long);
            axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}-&localityLanguage=en`)
            .then(res => {
              const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({stat, val}));
              setUserLocation(`${apiDataArr[11].val}, ${apiDataArr[14].val.administrative[2].name}`);
            })
            .catch(err => {
              console.log(err);
            });
          });
        } 
      };
      user && location();
  }, [user]);

  function handleLegendClick() {
    if (legendShown) {
      document.querySelector(".mapLegend").classList.add('hidden');
      setLegendShown(false);
    } else {
      document.querySelector(".mapLegend").classList.remove('hidden');
      setLegendShown(true);
    };
  };

  function handleColorSwitch(evt) {
    const name = evt.target.className;
    if (casesShown && name === "deathsButton") {
      document.querySelector(".casesButton").classList.remove('casesMap');
      document.querySelector(".deathsButton").classList.add('deathsMap');
      setCasesShown(!casesShown);
    } else if (!casesShown && name === "casesButton") {
      document.querySelector(".casesButton").classList.add('casesMap');
      document.querySelector(".deathsButton").classList.remove('deathsMap');
      setCasesShown(!casesShown);
    }
  };

  function handleMapSwitch() {
    if (!countiesShown) {
      document.querySelector(".countiesButton").classList.add('countiesMap');
      document.querySelector(".countiesButton").classList.remove('countiesDefault');
      setCountiesShown(!countiesShown);
    } if (countiesShown) {
      document.querySelector(".countiesButton").classList.remove('countiesMap');
      document.querySelector(".countiesButton").classList.add('countiesDefault');
      setCountiesShown(!countiesShown);
    };
  }

  return (
  <div className="mapContainer flex-ctr-ctr">
      <div className="openMapLegendIcon flex-ctr-ctr" onClick={handleLegendClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="2vh" height="2vh" fill="currentColor" className="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
      </svg>
      </div>
      <div className="mapLegend flex-ctr-ctr">
        <div className="closeMapLegendIcon" onClick={handleLegendClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="3.5vh" height="3.5vh" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <div className="mapLegendTitle">
          {casesShown ?
            <b>Total Cases</b>
            :
            <b>Total Deaths</b>
          }
          </div>
        <div className="mapLegendMainSection flex-ctr-ctr">
          {casesShown ?
            <div className="mapLegendColorBoxes flex-ctr-ctr">
              <div className="blue6 firstColorBox"></div>
              <div className="blue5"></div>
              <div className="blue4"></div>
              <div className="blue3"></div>
              <div className="blue2"></div>
              <div className="blue1 lastColorBox"></div>
            </div>
          :
            <div className="mapLegendColorBoxes flex-ctr-ctr">
              <div className="red6 firstColorBox"></div>
              <div className="red5"></div>
              <div className="red4"></div>
              <div className="red3"></div>
              <div className="red2"></div>
              <div className="red1 lastColorBox"></div>
            </div>
          }
          {onDashboard ? 
            casesShown ?
              <div className="mapLegendText">
                <div>4,000,001 - 5,000,000</div>
                <div>2,000,001 - 4,000,000</div>
                <div>1,000,001 - 2,000,000</div>
                <div>750,001 - 1,000,000</div>
                <div>275,001 - 750,000</div>
                <div>1 - 275,000</div>
              </div>
            :
              <div className="mapLegendText">
                <div>50,001 - 100,000</div>
                <div>20,001 - 50,000</div>
                <div>10,001 - 20,000</div>
                <div>5,001 - 10,000</div>
                <div>2,501 - 5,000</div>
                <div>1 - 2,500</div>
              </div>
          : 
            casesShown ?
              <div className="mapLegendText">
                <div>250,001 - 1,500,000</div> 
                <div>100,001 - 250,000</div>
                <div>25,001 - 100,000</div>
                <div>10,001 - 25,000</div>
                <div>1,001 - 10,000</div>
                <div>1 - 1,000</div>
              </div>
            :
              <div className="mapLegendText">
                <div>10,001 - 50,000</div> 
                <div>5,001 - 10,000</div>
                <div>1,001 - 5,000</div>
                <div>501 - 1,000</div>
                <div>101 - 500</div>
                <div>1 - 100</div>
              </div>
          }
        </div>
      </div>
      <div>
        <div className="deathsButton" onClick={handleColorSwitch}>
          Deaths
        </div>
        <div className="casesButton casesMap" onClick={handleColorSwitch}>
          Cases
        </div>
        {onDashboard && (
          <div className="countiesButton countiesDefault" onClick={handleMapSwitch}>
            Counties
          </div>
        )}
      </div>
      {onDashboard ? 
        <>
          <USMap 
            user={user}
            userLat={userLat} 
            userLong={userLong} 
            userLocation={userLocation} 
            casesShown={casesShown}
            countiesShown={countiesShown}
            tooltipContent={content}
            setTooltipContent={setContent} 
          />
          <ReactTooltip className="flex-ctr-ctr">{content}</ReactTooltip>
        </>  
        :
        <>
          <StateMap 
            user={user}
            userLat={userLat} 
            userLong={userLong} 
            userLocation={userLocation}
            casesShown={casesShown}
            setTooltipContent={setContent} 
          />
          <ReactTooltip className="flex-ctr-ctr">{content}</ReactTooltip>
        </>      
        }
    </div>
  )
}