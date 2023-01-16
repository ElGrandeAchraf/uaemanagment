    var flot1 = function () {
        var data = [[0, 11], [1, 15], [2, 25], [3, 24], [4, 13], [5, 18]];
        var dataset = [{
            data: data,
            color: "#0070E0"
        }];
        var ticks = [[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"]];

        var options = {
            series: {
                bars: {
                    show: true,
                    fill: 1
                }
            },
            bars: {
                align: "center",
                barWidth: 0.3
            },
            xaxis: {
                ticks: ticks,
                tickLength: 0
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "X: %x, Y: %y",
                defaultTheme: false
            }
        };
        $.plot($("#flot1"), dataset, options);
    };

    flot1();


    var flot2 = function () {
        var data1 = [[1, 3],
                [2, 345],
                [3, 34],
                [4, 234],
                [5, 435],
                [6, 458],
                [7, 879]
            ];
        var data2 = [
                [1, 134],
                [2, 789],
                [3, 423],
                [4, 416],
                [5, 489],
                [6, 157],
                [7, 340]
            ];
        var dataset = [{
            data: data1,
            color: "#0070E0"
        },
        {
            data: data2,
            color: "#63CB89"
        }];
        var ticks = [[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"]];

        var options = {
            series: {
                lines: {
                    show: true,
                    shadowSize: 0
                }
            },
            xaxis: {
                ticks: ticks,
                tickLength: 0
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "X: %x, Y: %y",
                defaultTheme: false
            }
        };
        $.plot($("#flot2"), dataset, options);
    };

    flot2();


    var flot3 = function () {
        var data = [{
            label: "1",
            data: 42,
            color: "#0070E0",
        }, {
            label: "2",
            data: 23,
            color: "#F1C205",
        }, {
            label: "3",
            data: 35,
            color: "#5893DF",
        }];
        var options = {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                labelFormatter: function(label, series){
                    return '<span class="pie-chart-legend">'+label+'</span>';
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s",
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            }
        };
        $.plot($("#flot3"), data, options);
    };

    flot3();


    var flot4 = function () {

        // We use an inline data source in the example, usually data would
        // be fetched from a server

        var data = [],
            totalPoints = 300;
        
        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            // Do a random walk

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                data.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        var plot4 = $.plot("#flot4", [ getRandomData() ], {
            series: {
                shadowSize: 0   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#63CB89"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot4.setData([getRandomData()]);

            plot4.draw();
            setTimeout(update, 30);
        }

        update();
        
    };

    flot4();