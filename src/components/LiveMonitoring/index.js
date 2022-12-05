import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs/canvasjs.react";

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = []; //dataPoints.
var xVal = dps.length + 1;
var yVal = 0;
var updateInterval = 500;

export default class LiveMonitoring extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateChart, updateInterval);
  }

  updateChart() {
    yVal = Math.random() * (3 - -3) + -3;
    dps.push({ x: xVal, y: yVal });
    xVal++;
    if (dps.length > 30) {
      dps.shift();
    }
    this.chart.render();
  }

  render() {
    const options = {
      title: {
        text: "",
      },
      data: [
        {
          type: "spline",
          markerSize: 0,
          dataPoints: dps,
        },
      ],
    };
    return (
      <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
    );
  }
}
