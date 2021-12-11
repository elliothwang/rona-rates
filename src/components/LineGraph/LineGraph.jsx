import React from 'react';
import { Line } from 'react-chartjs-2';

// TODO: fix graph;
export default function LineGraph({ chartData, chartLabels }) {
  const chartState = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Cases',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#60a6dc',
        borderColor: 'black',
        borderWidth: 1,
        data: chartData,
      },
    ],
  };

  return (
    <div className="graphContainer flex-ctr-ctr">
      <Line
        height={150}
        width={300}
        data={chartState}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
}
