import './StatsPage.css';
import React, { useEffect }  from 'react';
import fetchNovelCOVIDAPI from '../../utilities/novelCovidAPI';

export default function StatsPage() {



  return (
  <div>
    <button onClick={ () => fetchNovelCOVIDAPI() }>fetch novel covid api</button>
  </div>
  )
}