import './MajorStats.css';
import React  from 'react';

export default function MajorStats() {
  return (
    <div className="Info">
      <div className="Cases">
        <div>Cases</div>
        <div style={{ color: "black" }}>34964151</div>
      </div>
      <div className="Deaths">
        <div>Deaths</div>
        <div style={{ color: "red" }}>624746</div>
      </div>
      <div className="Recoveries">
        <div>Recoveries</div>
        <div style={{ color: "green" }}>29376745</div>
      </div>
      <div className="Vaccines">
        <div>Fully Vaccinated %</div>
        <div style={{ color: "#ffa008" }}>48.6%</div>
      </div>
    </div>
  )
}
