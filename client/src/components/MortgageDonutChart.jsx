import { useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MortgageDonutChart = (chartData) => {
  const { dataPoints } = chartData;
  const chartContainerRef = useRef(null);
 

  const options = {
    animationEnabled: true,
    height: 350,

    subtitles: [],
    data: [
      {
        type: "pie",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}</strong>",

        dataPoints: dataPoints,
      },
    ],
    toolTip: {
      enabled: true,
    },
  };

  return (
    <div className=" bg-slate-300 h-[300px]">
      <CanvasJSChart options={options} ref={chartContainerRef} />
    </div>
  );
};

export default MortgageDonutChart;
