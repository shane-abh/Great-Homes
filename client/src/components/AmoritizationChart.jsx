import  { useEffect, useRef, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const AmortizationChart = (amoritizationData) => {
  const chart = useRef(null);
  // const [chartData, setChartData] = useState({});
 
  const [amortizationData, setAmortizationData] = useState({
    standard: {
      interestPayment: [],
      principalPayment: [],
      remainingPayment: [],
    },
    accelerated: {
      interestPayment: [],
      principalPayment: [],
      remainingPayment: [],
    },
  });

  const processData = (amortization) => {
   
    const interestPayment = amortization.amortizationSchedule.map((item) => ({
      x: new Date(item.year, parseInt(item.month % 12)),
      y: parseFloat(item.interestPayment),
    }));
    const principalPayment = amortization.amortizationSchedule.map((item) => ({
      x: new Date(item.year, parseInt(item.month % 12)),
      y: parseFloat(item.principalPayment),
    }));
    const remainingPayment = amortization.amortizationSchedule.map((item) => ({
      x: new Date(item.year, parseInt(item.month % 12)),
      y: parseFloat(item.remainingPrincipal),
    }));
    return {
      interestPayment,
      principalPayment,
      remainingPayment,
    };
  };

  useEffect(() => {
    const standardAmortization = processData(
      amoritizationData.amoritizationData.standardAmortization
    );
    const acceleratedAmortization = processData(
      amoritizationData.amoritizationData.acceleratedAmortization
    );
    setAmortizationData({
      standard: standardAmortization,
      accelerated: acceleratedAmortization,
    });
  }, [amoritizationData]);

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.current.render();
  };

  const options = {
    animationEnabled: true,
    colorSet: "colorSet2",
    zoomEnabled: true,
    responsive: true,
    title: {
      text: "Amortization Schedule",
      fontFamily: "Lato",
      margin: 30,
    },
    axisX: {
      title: "Year",
      valueFormatString: "",
    },

    axisY: {
      title: "Payment",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC",
    },
    axisY2: {
      title: "Remaining Payment",
      titleFontColor: "#C0504E",
      lineColor: "#C0504E",
      labelFontColor: "#C0504E",
      tickColor: "#C0504E",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
      verticalAlign: "top",
      fontFamily: "Lato",
    },
    data: [
      {
        type: "stackedColumn",
        name: "Interest Payment (Standard)",
        showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: amortizationData.standard.interestPayment,
      },
      {
        type: "stackedColumn",
        name: "Principal Payment (Standard)",
        showInLegend: true,
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: amortizationData.standard.principalPayment,
      },
      {
        type: "line",
        name: "Remaining Payment (Standard)",
        showInLegend: true,
        color: "red",
        axisYType: "secondary",
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: amortizationData.standard.remainingPayment,
      },

      {
        type: "line",
        name: "Remaining Payment (Accelerated)",
        showInLegend: true,
        color: "blue",
        axisYType: "secondary",
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: amortizationData.accelerated.remainingPayment,
      },
    ],
  };

  return (
    <div className="">
      <CanvasJSChart options={options} onRef={(ref) => (chart.current = ref)} />
    </div>
  );
};

