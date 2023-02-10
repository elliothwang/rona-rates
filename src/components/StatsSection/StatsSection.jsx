import './StatsSection.css';
import React from 'react';
import StatCard from '../StatCard/StatCard';
import moment from 'moment';

export default function StatsSection({
  onDashboard,
  dbData,
  dbChartData,
  dbChartLabels,
  sData,
  sChartData,
  sChartLabels,
}) {
  let yesterday = moment().subtract(1, 'days').format('l');

  console.log(dbData);

  return (
    <div className="statsSection flex-ctr-ctr">
      {onDashboard ? (
        <>
          <StatCard
            title={'Cases'}
            stat1={dbData[3]?.val}
            stat2={dbData[11]?.val}
            stat3={dbData[4]?.val}
            chartTitle={'Past 30 days'}
            // chartData={dbChartData[0]}
            // chartLabels={dbChartLabels[0]}
            msg2={'(per 1 million)'}
            msg3={`(from ${yesterday})`}
            spaced={'spaced'}
            red={'red'}
          />
          <StatCard
            title={'Deaths'}
            stat1={dbData[5]?.val}
            stat2={dbData[12]?.val}
            stat3={dbData[6]?.val}
            chartTitle={'Past 30 days'}
            // chartData={dbChartData[1]}
            // chartLabels={dbChartLabels[0]}
            msg2={'(per 1 million)'}
            msg3={`(from ${yesterday})`}
            spaced={'spaced'}
            red={'red'}
          />
          <StatCard
            title={'Recoveries'}
            stat1={dbData[7]?.val}
            stat2={dbData[21]?.val}
            stat3={dbData[8]?.val}
            msg2={'(per 1 million)'}
            msg3={`(from ${yesterday})`}
            spaced={'spaced'}
          />
          <StatCard
            title={'Tests'}
            stat1={dbData[13]?.val}
            stat2={dbData[14]?.val}
            msg2={'(per 1 million)'}
          />
          <StatCard
            title={'Cases (active)'}
            stat1={dbData[9]?.val}
            stat2={dbData[20]?.val}
            msg1={'(active)'}
            msg2={'(per 1 million)'}
          />
          <StatCard
            title={'Cases (critical)'}
            stat1={dbData[10]?.val}
            stat2={dbData[22]?.val}
            msg1={'(critical)'}
            msg2={'(per 1 million)'}
          />
        </>
      ) : (
        <>
          <StatCard
            title={'Cases'}
            stat1={sData[2]?.val}
            stat2={sData[8]?.val}
            stat3={sData[3]?.val}
            msg2={'(per 1 million)'}
            msg3={`(from ${yesterday})`}
            spaced={'spaced'}
            red={'red'}
          />
          <StatCard
            title={'Deaths'}
            stat1={sData[4]?.val}
            stat2={sData[9]?.val}
            stat3={sData[5]?.val}
            msg2={'(per 1 million)'}
            msg3={`(from ${yesterday})`}
            spaced={'spaced'}
            red={'red'}
          />
          <StatCard
            title={'Recovered/Active'}
            stat1={sData[6]?.val}
            stat2={sData[7]?.val}
            msg2={'(active)'}
            msg3={`(as of ${yesterday})`}
            spaced={'spaced'}
          />
          <StatCard
            title={'Tests'}
            stat1={sData[10]?.val}
            stat2={sData[11]?.val}
            msg2={'(per 1 million)'}
          />
        </>
      )}
    </div>
  );
}
