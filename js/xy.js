/*chart11*/
//AM4chart License
am4core.addLicense("CH237726473");

// Create chart instance
var chart11 = am4core.create("chartdiv11", am4charts.XYChart);

// Add data
chart11.data = [{
  "country": "Lithuania",
  "litres": 501.9,
  "units": 250
}, {
  "country": "Czech Republic",
  "litres": 301.9,
  "units": 222
}, {
  "country": "Ireland",
  "litres": 201.1,
  "units": 170
}, {
  "country": "Germany",
  "litres": 165.8,
  "units": 122
}, {
  "country": "Australia",
  "litres": 139.9,
  "units": 99
}, {
  "country": "Austria",
  "litres": 128.3,
  "units": 85
}, {
  "country": "UK",
  "litres": 99,
  "units": 93
}, {
  "country": "Belgium",
  "litres": 60,
  "units": 50
}, {
  "country": "The Netherlands",
  "litres": 50,
  "units": 42
}];

// Create axes
let categoryAxis11 = chart11.xAxes.push(new am4charts.CategoryAxis());
categoryAxis11.dataFields.category = "country";
categoryAxis11.title.text = "Countries";

let valueAxis11 = chart11.yAxes.push(new am4charts.ValueAxis());
valueAxis11.title.text = "Litres sold (M)";

// Create series
var series11 = chart11.series.push(new am4charts.ColumnSeries());
series11.dataFields.valueY = "litres";
series11.dataFields.categoryX = "country";
series11.name = "Sales";
series11.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
series11.columns.template.fill = am4core.color("#0071d6");

var series11 = chart11.series.push(new am4charts.LineSeries());
series11.name = "Units";
series11.stroke = am4core.color("#CDA2AB");
series11.strokeWidth = 3;
series11.dataFields.valueY = "units";
series11.dataFields.categoryX = "country";
/*chart11 End*/



/*chart12*/
// Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart12 = am4core.create("chartdiv12", am4charts.XYChart);

// Add data
chart12.data = [{
  "country": "Lithuania",
  "litres": 501.9,
  "units": 250
}, {
  "country": "Czech Republic",
  "litres": 301.9,
  "units": 222
}, {
  "country": "Ireland",
  "litres": 201.1,
  "units": 170
}, {
  "country": "Germany",
  "litres": 165.8,
  "units": 122
}, {
  "country": "Australia",
  "litres": 139.9,
  "units": 99
}, {
  "country": "Austria",
  "litres": 128.3,
  "units": 85
}, {
  "country": "UK",
  "litres": 99,
  "units": 93
}, {
  "country": "Belgium",
  "litres": 60,
  "units": 50
}, {
  "country": "The Netherlands",
  "litres": 50,
  "units": 42
}];

// Create axes
var categoryAxis12 = chart12.xAxes.push(new am4charts.CategoryAxis());
categoryAxis12.dataFields.category = "country";
categoryAxis12.renderer.minGridDistance = 40;
categoryAxis12.title.text = "Countries";

var valueAxis12 = chart12.yAxes.push(new am4charts.ValueAxis());
valueAxis12.title.text = "Litres sold (M)";

// Create series
var series12 = chart12.series.push(new am4charts.ColumnSeries());
series12.dataFields.valueY = "litres";
series12.dataFields.categoryX = "country";
series12.name = "Sales";
series12.tooltipText = "{name}: [bold]{valueY}[/]";

var series12 = chart12.series.push(new am4charts.LineSeries());
series12.dataFields.valueY = "units";
series12.dataFields.categoryX = "country";
series12.name = "Units";
series12.tooltipText = "{name}: [bold]{valueY}[/]";
series12.strokeWidth = 3;

// Add legend
chart12.legend = new am4charts.Legend();

// Add cursor
chart12.cursor = new am4charts.XYCursor();

// Add simple vertical scrollbar
chart12.scrollbarY = new am4core.Scrollbar();
chart12.scrollbarX = new am4core.Scrollbar();

// Add horizotal scrollbar with preview
var scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series12);
chart12.scrollbarX = scrollbarX;
/*chart12 End*/



/*chart13*/
var chart13 = am4core.create("chartdiv13", am4charts.XYChart);

// Add data
chart13.data = [{
  "date": new Date(2018, 0, 1),
  "value": 450,
  "value2": 162,
  "value3": 1100
}, {
  "date": new Date(2018, 0, 2),
  "value": 669,
  "value3": 841
}, {
  "date": new Date(2018, 0, 3),
  "value": 1200,
  "value3": 199
}, {
  "date": new Date(2018, 0, 4),
  "value2": 867
}, {
  "date": new Date(2018, 0, 5),
  "value2": 185,
  "value3": 669
}, {
  "date": new Date(2018, 0, 6),
  "value": 150
}, {
  "date": new Date(2018, 0, 7),
  "value": 1220,
  "value2": 350,
  "value3": 600
}];

// Create axes
var dateAxis13 = chart13.xAxes.push(new am4charts.DateAxis());
dateAxis13.renderer.grid.template.location = 0;
dateAxis13.renderer.minGridDistance = 30;

var valueAxis13 = chart13.yAxes.push(new am4charts.ValueAxis());

// Create series
function createSeries(field, name) {
  var series13 = chart13.series.push(new am4charts.LineSeries());
  series13.dataFields.valueY = field;
  series13.dataFields.dateX = "date";
  series13.name = name;
  series13.tooltipText = "{dateX}: [b]{valueY}[/]";
  series13.strokeWidth = 2;
  
  series13.smoothing = "monotoneX";
  
  var bullet = series13.bullets.push(new am4charts.CircleBullet());
  bullet.circle.stroke = am4core.color("#fff");
  bullet.circle.strokeWidth = 2;
  
  return series13;
}

createSeries("value", "Series #1");
createSeries("value2", "Series #2");
createSeries("value3", "Series #3");

chart13.legend = new am4charts.Legend();
chart13.cursor = new am4charts.XYCursor();
/*chart13 End*/


/*chart14*/
am4core.useTheme(am4themes_animated);

var chart14 = am4core.create("chartdiv14", am4charts.XYChart);
chart14.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart14.data = [
  {
    country: "USA",
    visits: 23725
  },
  {
    country: "China",
    visits: 1882
  },
  {
    country: "Japan",
    visits: 1809
  },
  {
    country: "Germany",
    visits: 1322
  },
  {
    country: "UK",
    visits: 1122
  },
  {
    country: "France",
    visits: 1114
  },
  {
    country: "India",
    visits: 984
  },
  {
    country: "Spain",
    visits: 711
  },
  {
    country: "Netherlands",
    visits: 665
  },
  {
    country: "Russia",
    visits: 580
  },
  {
    country: "South Korea",
    visits: 443
  },
  {
    country: "Canada",
    visits: 441
  }
];

var categoryAxis14 = chart14.xAxes.push(new am4charts.CategoryAxis());
categoryAxis14.renderer.grid.template.location = 0;
categoryAxis14.dataFields.category = "country";

var valueAxis14 = chart14.yAxes.push(new am4charts.ValueAxis());
valueAxis14.min = 0;
valueAxis14.max = 24000;
valueAxis14.strictMinMax = false;
valueAxis14.renderer.minGridDistance = 30;
// axis break
var axisBreak = valueAxis14.axisBreaks.create();
axisBreak.startValue = 2100;
axisBreak.endValue = 22900;
axisBreak.breakSize = 0.005;

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;
/*
// this is exactly the same, but with events
axisBreak.events.on("over", () => {
  axisBreak.animate(
    [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
    1500,
    am4core.ease.sinOut
  );
});
axisBreak.events.on("out", () => {
  axisBreak.animate(
    [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
    1000,
    am4core.ease.quadOut
  );
});*/

var series14 = chart14.series.push(new am4charts.ColumnSeries());
series14.dataFields.categoryX = "country";
series14.dataFields.valueY = "visits";
series14.columns.template.tooltipText = "{valueY.value}";
series14.columns.template.tooltipY = 0;
series14.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series14.columns.template.adapter.add("fill", (fill, target) => {
  return chart14.colors.getIndex(target.dataItem.index);
});
/*chart14 End*/


