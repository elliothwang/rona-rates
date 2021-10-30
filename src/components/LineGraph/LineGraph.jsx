import React from 'react';
import {Line} from 'react-chartjs-2';

export default function LineGraph({ chartData, chartLabels }) {
  const chartState = {
    labels: ['9/29/21', '9/30/21', '10/1/21', '10/2/21', '10/3/21', '10/4/21', '10/5/21', '10/6/21', '10/7/21', '10/8/21', '10/9/21', '10/10/21', '10/11/21', '10/12/21', '10/13/21', '10/14/21', '10/15/21', '10/16/21', '10/17/21', '10/18/21', '10/19/21', '10/20/21', '10/21/21', '10/22/21', '10/23/21', '10/24/21', '10/25/21', '10/26/21', '10/27/21', '10/28/21'],
    datasets: [
      {
        label: 'Cases',
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#60a6dc",
        borderColor: 'black',
        borderWidth: 1,
        data: [43370567, 43481192, 43638676, 43677382, 43703970, 43873215, 43968483, 44079848, 44179958, 44310589, 44338046, 44361254, 44477504, 44583815, 44705283, 44791427, 44905300, 44937003, 44955672, 45072243, 45153507, 45242282, 45322443, 45421275, 45447586, 45463901, 45568730, 45648701, 45748395, 45826523]
      }
    ]
  }

  return(
    <div className="flex-ctr-ctr">
      <Line
        height={150}
        width={300}
        data= {chartState}
        options= {{
          maintainAspectRatio: false,
          legend: {
            display: true,
            position:'right'
          }
        }}
      />
    </div>
  );
}
