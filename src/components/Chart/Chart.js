import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const getDataPointValue = (dataPoint) => dataPoint.value;
  const dataPointValues = props.dataPoints.map(getDataPointValue);
  const totalMaximum = Math.max(...dataPointValues);

  const renderChartBar = (dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximum}
      label={dataPoint.label}
    />
  );

  return <div className="chart">{props.dataPoints.map(renderChartBar)}</div>;
};

export default Chart;
