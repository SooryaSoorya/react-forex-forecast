import React, { useState, useEffect } from 'react';
import './chart-view.scss';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer
} from 'recharts';

function ChartView(props) {
  const [maxValue, setMaxValue] = useState();
  const [minValue, setMinValue] = useState();
  const [maxYValue, setMaxYValue] = useState();
  const [chartColor, setChartColor] = useState(props.areaColor);
  console.log('areaColorareaColor', props.areaColor);
  console.log('props.renderDataprops.renderData', props.renderData);
  useEffect(() => {
    if (props.renderData) {
      setMaxValue(getMaxXValue());
      setMinValue(getMinValue());
      setChartMaxYValue();
      setChartColor(props.areaColor)
    }
  }, [props.areaColor, props.toCurrency, props.renderData])

  const getMaxXValue = () => {
    // console.log('Math.max(...props.renderData.map(item => (item[props.toCurrency])), 0);', Math.max(...props.renderData.map(item => (item[props.toCurrency])), 0))
    // return Math.max(...props.renderData.map(item => (item[props.toCurrency])), 0);
    // console.log('props.toCurrency',props.toCurrency)
    return Math.max(...props.renderData.map(function (item) { return item[props.toCurrency]; }), 0);
  }
  const getMinValue = () => {
    return Math.min.apply(null, props.renderData.map(function (item) { return item[props.toCurrency]; }));
  }
  const setChartMaxYValue = () => {
    // console.log('Math.round(maxValue + (25 * maxValue / 100))', Math.round(maxValue + (25 * maxValue / 100)))
    setMaxYValue(Math.round(maxValue + (25 * maxValue / 100)));
  }

  return (

    <div >
      <h3 className="chartheader">{props.header}</h3>
      <AreaChart
        width={1000}
        height={400}
        data={props.renderData}
        margin={{
          top: 10, right: 500, left: 0, bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[1, maxYValue]} type="number" />
        <Tooltip />
        <ReferenceLine y={maxValue} label="Max" stroke="red" strokeDasharray="3 3" />
        <ReferenceLine y={minValue} label="Min" stroke="grey" strokeDasharray="3 3" />
        <Area type="monotone" dataKey={props.toCurrency} stackId="1" stroke={chartColor}
          fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}

export default ChartView;
