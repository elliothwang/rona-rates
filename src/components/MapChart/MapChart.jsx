import React, { useState, useEffect, memo } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import * as help from '../../utilities/helper-functions';
const axios = require('axios').default;

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 5000000])
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
  const [usCounties, setUsCounties] = useState([]);
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
              console.log(userLocation);
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
    function getUSCountiesData() {
      axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
      .then(res => {
        const dataObj = Object.entries(res.data).map(e => e[1]);
        console.log(dataObj);
        setUsCounties(dataObj);
      })
      .catch(err => {
        console.log(err);
      });
    };
    getUSCountiesData();
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              geographies.map(geo => {
                // const cur = usCounties.find(county => help.geoId(`${county.county} County, ${help.abbr(county.province)}`) === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    // fill={colorScale(cur ? cur.stats.confirmed : "#EEE")}
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.name} County`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#EEE",
                        outline: "none"
                      },
                      hover: {
                        fill: "blue",
                        outline: "none"
                      },
                    }}
                  />
                );
              })
            )}
          </Geographies>
          {(user && userLong && userLat) && (
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
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);