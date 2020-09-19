import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

var chart = am4core.create('chartdiv', am4charts.PieChart);
function DataChartPicture({ picData }) {
  console.log(picData);
  // chart.dispose();
  // Add data
  chart.data = [
    {
      'type': 'Moist',
      'data': picData.moist,
    },
    {
      'type': 'Semi Dry',
      'data': picData.semidry,
    },
    {
      'type': 'Dry',
      'data': picData.dry,
    },
  ];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'data';
  pieSeries.dataFields.category = 'type';

  return <div id="chartdiv" style={{ width: '100%', height: '50%' }} />;
}

export default DataChartPicture;
