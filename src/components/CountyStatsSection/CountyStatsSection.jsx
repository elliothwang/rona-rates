import './CountyStatsSection.css';
import React, { useEffect, useState }  from 'react';
import CountyStatsContainer from '../CountyStatsContainer/CountyStatsContainer';
const axios = require('axios').default;

export default function CountyStatsSection() {
  const [usCountyCases, setUsCountyCases] = useState([]);
  const [usCountyDeaths, setUsCountyDeaths] = useState([]);
  const [casesShown, setCasesShown] = useState(true);
  // const [stateCountyData, setStateCountyData] = useState([]);

  function getCountyData() {
    axios.get('https://corona.lmao.ninja/v2/jhucsse/counties')
    .then(res => {
      const data = Object.entries(res.data).map(([stat, val]) => ({stat, val}));

      const sortedCountiesByCases = data.sort((acc, curr) => curr.val.stats.confirmed - acc.val.stats.confirmed);
      const top25CountiesByCases = sortedCountiesByCases.slice(0, 25);
      setUsCountyCases(top25CountiesByCases);

      const sortedCountiesByDeaths = data.sort((acc, curr) => curr.val.stats.deaths - acc.val.stats.deaths);
      const top25CountiesByDeaths = sortedCountiesByDeaths.slice(0, 25);
      setUsCountyDeaths(top25CountiesByDeaths);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => getCountyData(), []);

  function handleTabClick(evt) {
    const name = evt.target.className;
    if (casesShown && name === "deathsTab flex-ctr-ctr") {
      document.querySelector(".casesTab").classList.remove('activeTab');
      document.querySelector(".deathsTab").classList.add('activeTab');
      setCasesShown(false);
    } else if (!casesShown && name === "casesTab flex-ctr-ctr") {
      document.querySelector(".casesTab").classList.add('activeTab');
      document.querySelector(".deathsTab").classList.remove('activeTab');
      setCasesShown(true);
    };
  };

  return (
    <div className="outerCountyContainer">
      <div className="countyStatsSectionTitle flex-ctr-ctr">
        <div className="casesTab activeTab flex-ctr-ctr" onClick={handleTabClick}>Cases by County</div>
        <div className="deathsTab flex-ctr-ctr" onClick={handleTabClick}>Deaths by County</div>
      </div>
      <div className="countyStatsSection">
        { casesShown ? 
          usCountyCases.map((usCounty, idx) => 
            <CountyStatsContainer 
              title={usCounty?.val.county}
              stat1={usCounty?.val.stats.confirmed }
              idx={idx}
              casesShown={casesShown}
            />
          )
          :
          usCountyDeaths.map((usCounty, idx) => 
            <CountyStatsContainer 
              title={usCounty?.val.county}
              stat1={usCounty?.val.stats.deaths }
              idx={idx}
              casesShown={casesShown}
            />
          )
        }
        <div className="spacerContainer"></div>
      </div>
    </div>
  )
}
