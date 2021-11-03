import React, { useState, useEffect, memo } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
const axios = require('axios').default;

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

const MapChart = ({ user, setTooltipContent}) => {
  const [data, setData] = useState([]);
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [userLocation, setUserLocation] = useState("");

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
      user && location()
  }, [user])

  useEffect(() => {
    // https://www.bls.gov/lau/
    // csv("/unemployment-by-county-2017.csv").then(counties => {
    //   setData(counties);
    // });
    
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#FFF"
                  fill="#EEE"
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name} County`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            )}
          </Geographies>
          {
            (user && userLong && userLat) && (
            <Marker coordinates={[userLong, userLat]}>
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
            )
          }
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);