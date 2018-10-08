bb.generate({
    bindto: "#chart",
    data: {
        columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 130, 100, 140, 35, 110, 50]
        ],
        types: {
          data1: "line",
          data2: "area-spline"
        },
        colors: {
          data1: "red",
          data2: "green"
        }
    }
});



// Script
var chart = bb.generate({
  data: {
    columns: [
	["data1", 30, 350, 200, 380, 150, 250, 50, 80, 55, 220],
	["data2", 130, 100, 10, 200, 80, 50, 200, 123, 185, 98],
	["data3", 230, 153, 85, 300, 250, 120, 5, 84, 99, 289]
    ],
    type: "bubble",
    labels: true
  },
  bubble: {
    maxR: 50
  },
  axis: {
    x: {
      type: "category"
    },
    y: {
      max: 450
    }
  },
  bindto: "#BubbleChart"
});

setTimeout(function() {
	chart.load({
		columns: [
			["data1", 100, 50, 150, 200, 100, 350, 58, 210, 80, 126]
		]
	});
}, 2500);

setTimeout(function() {
	chart.load({
		columns: [
			["data2", 305, 350, 55, 25, 335, 29, 258, 310, 180, 226]
		]
	});
}, 2500);

setTimeout(function() {
	chart.load({
		columns: [
			["data3", 223, 121, 259, 247, 53, 159, 95, 111, 307, 337]
		]
	});
}, 3000);

var chart = bb.generate({
    data: {
      columns: [
      ["data1", 30],
      ["data2", 120]
      ],
      type: "pie",
      onclick: function(d, i) {
      console.log("onclick", d, i);
     },
      onover: function(d, i) {
      console.log("onover", d, i);
     },
      onout: function(d, i) {
      console.log("onout", d, i);
     }
    },
    bindto: "#PieChart"
  });
  
  setTimeout(function() {
      chart.load({
          columns: [
              ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
              ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
              ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
          ]
      });
  }, 1500);
  
