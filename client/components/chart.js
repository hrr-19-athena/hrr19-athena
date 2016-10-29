//==============render individual chart for personality analysis=====
import React, { Component } from 'react'
import { BarHorizontalChart, BarChart } from 'react-d3-basic'

const Chart = (props) => {
  const data = props.data
  const colors = ['#F48FB1', '#5C6BC0', '#9575CD', '#80DEEA', '#40C4FF', '#FFAB91', '#FFC107']
  const width = 700,
        height = 250,
        margins = {top: 40, right: 100, bottom: 40, left: 100},
        title = props.title,
        chartSeries = [
          {
            field: 'percentile',
            color: colors[props.index],
            name: 'percentile'
          }
        ],
        x = d => d.name,
        y = d => +d,
        xScale = 'ordinal',
        yTicks = [10, '%']

  return (
    <div style = {{textAlign: 'center'}}>
        <BarChart
          width = { width }
          height = { height }
          margins = { margins }
          data = { data }
          title = { title }
          chartSeries = { chartSeries }
          y = { y }
          x = { x }
          xScale = { xScale }
          yTicks = { yTicks }
          showXGrid = { false }
          showYGrid = { false }
          showLegend = { false }
        />
    </div>
  )
}

export default Chart