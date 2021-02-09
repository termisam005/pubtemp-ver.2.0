/*chart1*/
//AM4chart License
am4core.addLicense("CH237726473");

// Create chart1 instance
var chart1 = am4core.create("chartdiv01", am4charts.PieChart);

// Add data
chart1.data = [{
  "country": "Korea",
  "litres": 501.9
}, {
  "country": "China",
  "litres": 301.9
}, {
  "country": "USA",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Belgium",
  "litres": 60
}];

// Add and configure Series
var pieSeries = chart1.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";

// Let's cut a hole in our Pie chart the size of 40% the radius
chart1.innerRadius = am4core.percent(40);

// Disable ticks and labels
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Set up fills
pieSeries.slices.template.fillOpacity = 1;

var hs = pieSeries.slices.template.states.getKey("hover");
hs.properties.scale = 1;
hs.properties.fillOpacity = 0.5;

chart1.legend = new am4charts.Legend();
/*chart1 End*/



/*chart2*/
// Create chart instance
var chart2 = am4core.create("chartdiv02", am4charts.PieChart);

// Add data
chart2.data = [{
  "country": "Lithuania",
  "litres": 461.9,
  "color": am4core.color("#f63b3b")
}, {
  "country": "Czechia",
  "litres": 341.9,
  "color": am4core.color("#0071d6")
}, {
  "country": "Ireland",
  "litres": 201.1,
  "color": am4core.color("#F1D302")
}];

// Add and configure Series
var pieSeries = chart2.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.propertyFields.fill = "color";

chart2.legend = new am4charts.Legend();    
/*chart2 End*/



/*chart3*/
am4core.useTheme(am4themes_animated);

var chart3 = am4core.create("chartdiv03", am4charts.PieChart3D);
chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart3.data = [
  {
    country: "Lithuania",
    litres: 350.9
  },
  {
    country: "Czech Republic",
    litres: 301.9
  },
  {
    country: "Ireland",
    litres: 201.1
  },
  {
    country: "Germany",
    litres: 165.8
  },
  {
    country: "Australia",
    litres: 139.9
  },
  {
    country: "Austria",
    litres: 128.3
  }
];

chart3.innerRadius = am4core.percent(40);
chart3.depth = 120;

chart3.legend = new am4charts.Legend();
chart3.legend.position = "right";

var series = chart3.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.depthValue = "litres";
series.dataFields.category = "country";
series.slices.template.cornerRadius = 5;
series.colors.step = 3;

series.labels.template.disabled = true;
series.ticks.template.disabled = true;
/*chart3 End*/



/*chart4*/
am4core.useTheme(am4themes_animated);

var chart4 = am4core.create("chartdiv04", am4charts.PieChart);
chart4.hiddenState.properties.opacity = 0;

chart4.data = [
  {
    country: "Lithuania",
    value: 401
  },
  {
    country: "Czech Republic",
    value: 300
  },
  {
    country: "Ireland",
    value: 200
  },
  {
    country: "Germany",
    value: 165
  },
];
chart4.radius = am4core.percent(70);
chart4.innerRadius = am4core.percent(40);
chart4.startAngle = 180;
chart4.endAngle = 360;  

var series4 = chart4.series.push(new am4charts.PieSeries());
series4.dataFields.value = "value";
series4.dataFields.category = "country";

series4.slices.template.cornerRadius = 0;
series4.slices.template.innerCornerRadius = 0;
series4.slices.template.draggable = true;
series4.slices.template.inert = true;

series4.labels.template.disabled = true;
series4.ticks.template.disabled = true;

series4.hiddenState.properties.startAngle = 90;
series4.hiddenState.properties.endAngle = 90;

chart4.legend = new am4charts.Legend();
/*chart4 End*/