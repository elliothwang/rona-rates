import React, { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { scaleThreshold } from 'd3-scale';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import * as help from '../../utilities/helper-functions';
const axios = require('axios').default;

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json';

const colorScaleCountyCases = scaleThreshold()
  .domain([1000, 10000, 25000, 250000, 500000, 2500000])
  .range(['#cfe2f3', '#9fc5e8', '#6fa8dc', '#3d85c6', '#416aab', '#204c91']);

const colorScaleCountyDeaths = scaleThreshold()
  .domain([100, 500, 1000, 5000, 10000, 50000])
  .range(['#fcdcd6', '#ffb6b6', '#f29292', '#de6969', '#da3a3a', '#bb0808']);

const StateMap = ({
  user,
  userLat,
  userLong,
  userLocation,
  setReactTooltipContent,
}) => {
  const casesShown = useSelector((state) => state.casesShown.value);
  const [stateCounties, setStateCounties] = useState([]);
  const [geoCenterLat, setGeoCenterLat] = useState();
  const [geoCenterLong, setGeoCenterLong] = useState();
  const [geoZoom, setGeoZoom] = useState(1);

  useEffect(() => {
    function getUSCountiesData() {
      axios
        .get('https://disease.sh/v3/covid-19/jhucsse/counties')
        .then((res) => {
          const data = Object.entries(res.data)
            .map((e) => e[1])
            .filter(
              (county) =>
                county.province === localStorage.getItem('storageStateName')
            );
          for (let i = 0; i < data.length; i++) {
            data[i].country = help.geoId(data[i].county, data[i].province);
          }
          setStateCounties(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUSCountiesData();
  }, []);

  useEffect(() => {
    function getGeoCenter() {
      const stateName = localStorage.getItem('storageStateName');
      const stateData = help.geoCenter(stateName);
      setGeoCenterLat(stateData.lat);
      setGeoCenterLong(stateData.lon);
      setGeoZoom(stateData.zoom);
    }
    localStorage.getItem('storageStateName') && getGeoCenter();
  }, []);

  return (
    <ComposableMap data-tip="" projection="geoAlbersUsa">
      {geoCenterLat && geoCenterLong && geoZoom && (
        <ZoomableGroup center={[geoCenterLong, geoCenterLat]} zoom={geoZoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const curr = stateCounties.find(
                  (county) => county.country === geo.id
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    x
                    fill={
                      casesShown
                        ? colorScaleCountyCases(
                            curr ? curr?.stats.confirmed : '#EEE'
                          )
                        : colorScaleCountyDeaths(
                            curr ? curr?.stats.deaths : '#EEE'
                          )
                    }
                    stroke={
                      curr?.province ===
                      localStorage.getItem('storageStateName')
                        ? '#3e4348'
                        : 'transparent'
                    }
                    strokeWidth="0.15"
                    style={{
                      hover: {
                        fill: 'gray',
                      },
                    }}
                    onMouseEnter={() => {
                      curr?.province ===
                        localStorage.getItem('storageStateName') &&
                        (casesShown
                          ? setReactTooltipContent(
                              `${geo.properties.name} County - ${help.addCommas(
                                curr?.stats.confirmed
                              )}`
                            )
                          : setReactTooltipContent(
                              `${geo.properties.name} County - ${help.addCommas(
                                curr?.stats.deaths
                              )}`
                            ));
                    }}
                    onMouseLeave={() => {
                      setReactTooltipContent('');
                    }}
                  />
                );
              })
            }
          </Geographies>
          {user && userLong && userLat && (
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
                style={{ fontFamily: 'PT Serif', fill: 'black' }}
              >
                {user.name}
              </text>
            </Marker>
          )}
        </ZoomableGroup>
      )}
    </ComposableMap>
  );
};

export default memo(StateMap);
