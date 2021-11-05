import React, { useState, useEffect, memo } from "react";
import { scaleThreshold } from "d3-scale";
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";
import * as help from '../../utilities/helper-functions';
const axios = require('axios').default;

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScaleCountiesCases = scaleThreshold()
.domain([1000, 10000, 25000, 100000, 250000, 1500000])
.range([
  "#cfe2f3",
  "#9fc5e8",
  "#6fa8dc",
  "#3d85c6",
  "#416aab",
  "#204c91"
]);

const colorScaleCountiesDeaths = scaleThreshold()
.domain([100, 500, 1000, 5000, 10000, 25000])
.range([
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d"
]);

const MapChart = ({ user, onDashboard, setTooltipContent }) => {
  const [usCounties, setUsCounties] = useState([]);
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [userLocation, setUserLocation] = useState("");
  const [geoCenterLat, setGeoCenterLat] = useState();
  const [geoCenterLong, setGeoCenterLong] = useState();
  const [geoZoom, setGeoZoom] = useState(1);

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
              console.log(userLocation);
            })
            .catch(err => {
              console.log(err);
            });
          });
        } 
      };
      user && location();
  }, [user]);

  
  useEffect(() => {
    function getUSCountiesData() {
      axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
      .then(res => {
        const dataObj = Object.entries(res.data).map(e => e[1]);
        setUsCounties(dataObj);
      })
      .catch(err => {
        console.log(err);
      });
    };
    getUSCountiesData();
  }, []);

  useEffect(() => {
    function getGeoCenter() {
      const stateName = localStorage.getItem('storageStateName');
      const stateData = help.geoCenter(stateName);
      setGeoCenterLat(stateData.lat);
      setGeoCenterLong(stateData.lon);
      setGeoZoom(stateData.zoom);
    };
    (!onDashboard && localStorage.getItem("storageStateName")) && getGeoCenter();
  }, []);
  
  useEffect(() => {
    onDashboard && (localStorage.removeItem('storageStateName'));
  }, []);

  return (
    <>
      { onDashboard ? 
        <>
          <ComposableMap className="countyMap" data-tip="" projection="geoAlbersUsa">
            <ZoomableGroup zoom={1} >
              <Geographies geography={geoUrl}>
                {({ geographies }) => (
                  geographies.map(geo => {
                    const curr = usCounties.find(county => county.county === geo.properties.name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${geo.properties.name} County`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        fill={colorScaleCountiesCases(curr ? curr.stats.confirmed : "#EEE")}
                        style={{
                          hover: {
                            fill: "gray",
                            outline: "none"
                          },
                          pressed: {
                            outline: "black"
                          }
                        }}
                      />
                    );
                  })
                )}
              </Geographies>
              {(user && userLong && userLat) && (
                <Marker coordinates={[userLong, userLat]} >
                  <g
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y={-30}
                    style={{ fontFamily: "PT Serif", fill: "black" }}
                  >
                    {user.name}
                  </text>
                </Marker>
              )}
            </ZoomableGroup>

          </ComposableMap>
        </>
      :
        <>
          <ComposableMap className="countyMap" data-tip="" projection="geoAlbersUsa">
            {(geoCenterLat && geoCenterLong && geoZoom) && (
              <ZoomableGroup center={[geoCenterLong, geoCenterLat]} zoom={geoZoom} >
                <Geographies geography={geoUrl}>
                  {({ geographies }) => (
                    geographies.map(geo => {
                      const curr = usCounties.find(county => county.county === geo.properties.name);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={colorScaleCountiesCases(curr ? curr.stats.confirmed : "#EEE")}
                          onMouseEnter={() => {
                            setTooltipContent(`${geo.properties.name} County`);
                          }}
                          onMouseLeave={() => {
                            setTooltipContent("");
                          }}
                          style={{
                            hover: {
                              fill: "gray",
                              outline: "none"
                            },
                            pressed: {
                              outline: "black"
                            }
                          }}
                        />
                      );
                    })
                  )}
                </Geographies>
                {(user && userLong && userLat) && (
                  <Marker coordinates={[userLong, userLat]} >
                    <g
                      fill="none"
                      stroke="black"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="translate(-12, -24)"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                      textAnchor="middle"
                      y={-30}
                      style={{ fontFamily: "PT Serif", fill: "black" }}
                    >
                      {user.name}
                    </text>
                  </Marker>
                )}
              </ZoomableGroup>
            )}
          </ComposableMap>
        </>
      }
    </>
  );
};

export default memo(MapChart);