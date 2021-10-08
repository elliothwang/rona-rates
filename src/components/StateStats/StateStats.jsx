import './StateStats.css';

export default function StateStats() {
  const stateData = JSON.parse(localStorage.getItem('stateData'));
  
  return (
    <div>
      <h1>{stateData.state}</h1>
      <div className="stateStatsContainer">
        <div className="stateCasesTotal">
          Total Cases: { stateData.cases }
        </div>
        <div className="stateDeathsTotal">
          Total Deaths: { stateData.deaths }  
        </div>
        <div className="stateRecoveriesTotal">
          Total Recoveries: { stateData.recovered }
        </div>
        <div className="stateCasesToday">
          New Cases: { stateData.todayCases }
        </div>
        <div className="stateDeathsToday">
          New Deaths: { stateData.todayDeaths }
        </div>
      </div>
    </div>
  )
}