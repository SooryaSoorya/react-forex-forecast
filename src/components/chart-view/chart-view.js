import React, { useState, useEffect } from 'react';
import './chart-view.scss';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine
} from 'recharts';

function ChartView(props) {
  const [maxValue, setMaxValue] = useState();
  const [minValue, setMinValue] = useState();
  const [minYValue, setMinYValue] = useState();
  const [maxYValue, setMaxYValue] = useState();
  useEffect(() => {
    if (props.renderData) {
      setMaxValue(getMaxXValue());
      setMinValue(getMinValue());
      setMaxYValue(Math.round(maxValue + (25 * maxValue / 100)));
      setMinYValue(Math.round(minValue - (50 * minValue / 100)));
    }
  })

  const getMaxXValue = () => {
    return Math.max(...props.renderData.map(function (item) { return item[props.toCurrency]; }), 0);
  }

  const getMinValue = () => {
    return Math.min.apply(null, props.renderData.map(function (item) { return item[props.toCurrency]; }));
  }

  return (
    <div >
      <h3 className="rff-chartheader">{props.header}</h3>
      <AreaChart
        width={1000}
        height={400}
        data={props.renderData}
        margin={{
          top: 10, right: 500, left: 0, bottom: 20,
        }}
      >
        <Area dataKey={props.toCurrency} type="monotone"  stackId="1" stroke={props.areaColor}
          fillOpacity={1} fill="url(#colorUv)" />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={props.areaColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={props.areaColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[minYValue, maxYValue]} type="number" />
        <Tooltip />
        <ReferenceLine y={maxValue} label="Max" stroke="red" strokeDasharray="3 3" />
        <ReferenceLine y={minValue} label="Min" stroke="grey" strokeDasharray="3 3" />

      </AreaChart>
    </div>
  )
}

export default ChartView;
