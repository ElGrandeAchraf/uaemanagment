$(document).ready(function() {
    
    "use strict";

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
      if (arguments.length < 3) o = 0;
      function bump(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
          var w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function() {
          var a = [], i;
          for (i = 0; i < m; i++) a[i] = o + o * Math.random();
          for (i = 0; i < 5; i++) bump(a);
          return a.map(stream_index);
        });
    };

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
      return d3.range(n).map(function(i) {
        return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-.5 * x);
          }).map(stream_index);
        });
    };

    function stream_index(d, i) {
      return {x: i, y: Math.max(0, d)};
    };

    var nvddata1 = function() {
        return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
            var a = i + 1;
            return {
                key: 'Product' + a,
                values: data
            };
        });
    };

    nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
        .color(['#3e8ef7','#63CB89','#F1C205'])

        chart.xAxis
            .tickFormat(d3.format(',f'));

        chart.yAxis
            .tickFormat(d3.format(',.1f'));

        d3.select('#chart1 svg')
            .datum(nvddata1())
            .transition().duration(500)
            .call(chart)
            ;

        nv.utils.windowResize(chart.update);

        return chart;

    });

    // apexchart 2
    var options = {
        chart: {
            height: 350,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        series: [{
            name: "SAMPLE A",
            data: [
                [16.4, 5.4],
                [21.7, 2],
                [25.4, 3],
                [19, 2],
                [10.9, 1],
                [13.6, 3.2],
                [10.9, 7.4],
                [10.9, 0],
                [10.9, 8.2],
                [16.4, 0],
                [16.4, 1.8],
                [13.6, 0.3],
                [13.6, 0],
                [29.9, 0],
                [27.1, 2.3],
                [16.4, 0],
                [13.6, 3.7],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 0],
                [24.5, 7.1],
                [10.9, 0],
                [8.1, 4.7],
                [19, 0],
                [21.7, 1.8],
                [27.1, 0],
                [24.5, 0],
                [27.1, 0],
                [29.9, 1.5],
                [27.1, 0.8],
                [22.1, 2]
            ]
        }, {
            name: "SAMPLE B",
            data: [
                [36.4, 13.4],
                [1.7, 11],
                [5.4, 8],
                [9, 17],
                [1.9, 4],
                [3.6, 12.2],
                [1.9, 14.4],
                [1.9, 9],
                [1.9, 13.2],
                [1.4, 7],
                [6.4, 8.8],
                [3.6, 4.3],
                [1.6, 10],
                [9.9, 2],
                [7.1, 15],
                [1.4, 0],
                [3.6, 13.7],
                [1.9, 15.2],
                [6.4, 16.5],
                [0.9, 10],
                [4.5, 17.1],
                [10.9, 10],
                [0.1, 14.7],
                [9, 10],
                [12.7, 11.8],
                [2.1, 10],
                [2.5, 10],
                [27.1, 10],
                [2.9, 11.5],
                [7.1, 10.8],
                [2.1, 12]
            ]
        }, {
            name: "SAMPLE C",
            data: [
                [21.7, 3],
                [23.6, 3.5],
                [24.6, 3],
                [29.9, 3],
                [21.7, 20],
                [23, 2],
                [10.9, 3],
                [28, 4],
                [27.1, 0.3],
                [16.4, 4],
                [13.6, 0],
                [19, 5],
                [22.4, 3],
                [24.5, 3],
                [32.6, 3],
                [27.1, 4],
                [29.6, 6],
                [31.6, 8],
                [21.6, 5],
                [20.9, 4],
                [22.4, 0],
                [32.6, 10.3],
                [29.7, 20.8],
                [24.5, 0.8],
                [21.4, 0],
                [21.7, 6.9],
                [28.6, 7.7],
                [15.4, 0],
                [18.1, 0],
                [33.4, 0],
                [16.4, 0]
            ]
        }],
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 7
        }
    }
    var chart = new ApexCharts(document.querySelector("#apexchart2"), options);
    chart.render();

    // apexchart 3
    var options = {
        chart: {
            type: 'donut',
        },
        series: [44, 55, 41, 17],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(document.querySelector("#apexchart3"), options);
    chart.render();


});