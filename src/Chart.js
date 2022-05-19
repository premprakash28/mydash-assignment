import * as d3 from "d3";
import { color } from "d3";
import { useState } from "react";
import { useEffect } from "react";

const width = 600;
const height = 600;

const Chart = () => {
  const [barData, setBarData] = useState([120, 480, 670, 320]);

  const clickHandler = () => {
    const element = document.querySelector(".svg-container");
    if (element) {
      element.remove();
    }
    const newData = barData.map((d, index) => Math.random().toFixed(3) * 1000);
    setBarData(newData);
    generateSvg();
  };
  const generateSvg = () => {
    const widthScale = d3.scaleLinear().domain([0, 1100]).range([0, width]);
    const color = d3.scaleLinear().domain([0, 1100]).range(["red", "blue"]);

    const axis = d3.axisBottom().scale(widthScale);
    const container = d3
      .select("#svg-item")
      .append("svg")
      .classed("svg-container", true)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(100,100)");

    const bars = container
      .selectAll("rect")
      .data(barData)
      .enter()
      .append("rect")
      .attr("width", (data) => {
        return widthScale(data);
      })
      .attr("height", 100)
      .attr("fill", (d) => color(d))
      .attr("y", (data, i) => i * 120);

    container.append("g").attr("transform", "translate(0,-50)").call(axis);
  };

  return (
    <div>
      <div className="svg-item"></div>
      <button className="btn-graph" onClick={clickHandler}>
        Show Bar-Chart
      </button>
    </div>
  );
};
export default Chart;
