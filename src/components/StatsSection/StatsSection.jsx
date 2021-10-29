import './StatsSection.css';
import React from 'react';
import StatCard from '../StatCard/StatCard';
import moment from 'moment';

export default function StatsSection({ onDashboard, dbData, sData }) {
  let yesterday = moment().subtract(1, 'days').format('l'); 

  return (
    <div className="statsSection flex-ctr-ctr">
      { onDashboard ? 
        <>
          <StatCard 
            title={"Cases"}
            stat1={dbData[3]?.val}
            stat2={dbData[11]?.val}
            stat3={dbData[4]?.val}
            msg1={"(US total)"}
            msg2={"(per 1 million)"}
            msg3={`(from ${yesterday})`}
            spaced={"spaced"}
            red={"red"}
          />
          <StatCard 
            title={"Deaths"}
            stat1={dbData[5]?.val}
            stat2={dbData[12]?.val}
            stat3={dbData[6]?.val}
            msg1={"(US total)"}
            msg2={"(per 1 million)"}
            msg3={`(from ${yesterday})`}
            spaced={"spaced"}
            red={"red"}
          />
          <StatCard 
            title={"Recoveries"}
            stat1={dbData[7]?.val}
            stat2={dbData[21]?.val}
            stat3={dbData[8]?.val}
            msg1={"(US total)"}
            msg2={"(per 1 million)"}
            msg3={`(from ${yesterday})`}
            spaced={"spaced"}
          />
          <StatCard 
            title={"Tests"}
            stat1={dbData[13]?.val}
            stat2={dbData[14]?.val}
            msg1={"(US total)"}
            msg2={"(per 1 million)"}
          />
          <StatCard 
            title={"Cases (active)"}
            stat1={dbData[9]?.val}
            stat2={dbData[20]?.val}
            msg1={"(US total)"}
            msg2={"(per 1 million)"}
          />
          <StatCard 
            title={"Cases (critical)"}
            stat1={dbData[10]?.val}
            stat2={dbData[22]?.val}
            msg1={"(US total)"}
            msg2={"(per 1 million)"}
          />
        </>
      :
        <>
          <StatCard 
            title={"Cases"}
            stat1={sData[2]?.val}
            stat2={sData[3]?.val}
            msg={`(from ${yesterday})`}
            spaced={"spaced"}
          />
          <StatCard 
            title={"Deaths"}
            stat1={sData[4]?.val}
            stat2={sData[5]?.val}
            msg={`(from ${yesterday})`}
            spaced={"spaced"}
          />
          <StatCard 
            title={"Per Million"}
            stat1={sData[8]?.val}
            stat2={sData[9]?.val}
            msg={"Per one million people"}
            spaced={"spaced"}
          />
          <StatCard 
            title={"Recoveries"}
            stat1={sData[6]?.val}
            msg={`(from ${yesterday})`}
          />
          <StatCard 
            title={"Active"}
            stat1={sData[7]?.val}
            msg={`(as of ${yesterday})`}
          />
          <StatCard 
            title={"Tests"}
            stat1={sData[10]?.val}
            stat2={sData[11]?.val}
            msg={"Per one million people"}
          />
        </>
      }
    </div>
  )
}
