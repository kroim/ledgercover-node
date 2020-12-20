(function ($) {
    'use strict';
    $(function () {
        $.fn.andSelf = function () {
            return this.addBack.apply(this, arguments);
        }
        var statsLineData = {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"],
            label: 'Sales',
            borderColor: '#027bff',
            backgroundColor: '#cce5ff',
            borderWidth: '3'
        };
        var statsLineOptions = {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            legend: false,
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            }
        }
        if ($('#kpi-area-stats').length) {
            var lineChartCanvas = $('#kpi-area-stats').get(0).getContext("2d");
            var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 50);
            gradientStrokeFill_1.addColorStop(0, '#E2ADF7');
            gradientStrokeFill_1.addColorStop(1, '#B183EA');

            var gradientStrokeFill_2 = lineChartCanvas.createLinearGradient(0, 0, 0, 60);
            gradientStrokeFill_2.addColorStop(0, 'rgba(255,255,255,0.5)');
            gradientStrokeFill_2.addColorStop(1, '#8862E0');

            var areaData = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
                datasets: [{
                    label: 'Sessions',
                    data: [60, 90, 65, 90, 60, 100, 90, 100, 55, 60, 70, 140, 70, 90],
                    borderColor: '#8862E0',
                    backgroundColor: gradientStrokeFill_2,
                    borderWidth: 2
                }, {
                    label: 'Sessions',
                    data: [90, 110, 95, 130, 90, 160, 140, 130, 85, 110, 100, 180, 140, 130],
                    borderColor: "#C2AEEF",
                    backgroundColor: gradientStrokeFill_1,
                    borderWidth: 2
                }]
            };

            var areaOptions = {
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                elements: {
                    point: {
                        radius: 0
                    },
                    line: {
                        tension: 0
                    }
                },
                legend: false,
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }]
                }
            }

            var lineChart = new Chart(lineChartCanvas, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
        if ($('#kpi-bar-stats').length) {
            var ctx = document.getElementById("kpi-bar-stats").getContext("2d");

            var data = {
                labels: ["Chocolate", "Vanilla", "Strawberry", "Strawberry", "args", "hsf"],
                datasets: [{
                    label: "Data 1",
                    backgroundColor: "#fff",
                    borderColor: "#62d896",
                    borderWidth: 0,
                    data: [3, 7, 5, 2, 4, 6, 8]
                }, {
                    label: "Data 2",
                    backgroundColor: "#a7f3d8",
                    borderColor: "#62d896",
                    borderWidth: 0,
                    data: [4, 3, 4, 6, 2, 5, 9]
                }]
            };

            var kpiBarChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: {
                    barValueSpacing: 10,
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                            }
                        }]
                    },
                    legend: false,
                    scales: {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }]
                    }
                }
            });
        }
        if ($('#kpi-line-stats').length) {
            var lineChartCanvas = $('#kpi-line-stats').get(0).getContext("2d");
            var LineData = {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [{
                    label: 'Sessions',
                    data: [60, 90, 65, 90, 60, 100, 90],
                    borderColor: '#fff',
                    backgroundColor: "rgba(255,255,255,0)",
                    borderWidth: 2,
                    fill: true
                }, {
                    label: 'Sessions',
                    data: [90, 110, 95, 130, 90, 160, 120],
                    borderColor: "#fff",
                    backgroundColor: "rgba(255,255,255,0)",
                    borderWidth: 2,
                    fill: true
                }]
            };

            var LineOptions = {
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                elements: {
                    point: {
                        radius: 2,
                        backgroundColor: '#fff',
                        borderColor: '#1071bf'
                    },
                    line: {
                        tension: 0
                    }
                },
                legend: false,
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }]
                }
            }

            var lineChart = new Chart(lineChartCanvas, {
                type: 'line',
                data: LineData,
                options: LineOptions
            });
        }
        if ($('#kpi-bars-multiple-stats').length) {
            var barChartCanvas = $('#kpi-bars-multiple-stats').get(0).getContext("2d");
            var BarMultipleData = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
                datasets: [{
                    label: 'Sessions',
                    data: [60, 90, 65, 90, 60, 100, 90, 70, 50, 30, 10, 100, 60, 65, 30, 80, 95, 20, 23, 64, 75, 23, 76, 25, 47],
                    borderColor: "#f6ae42",
                    backgroundColor: "rgba(255,255,255,0.66)",
                    borderWidth: 0,
                }]
            };

            var BarMultipleOptions = {
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                elements: {
                    point: {
                        radius: 2,
                        backgroundColor: '#fff',
                        borderColor: '#1071bf'
                    },
                    line: {
                        tension: 0
                    }
                },
                legend: false,
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }]
                }
            }

            var barmultipleChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: BarMultipleData,
                options: BarMultipleOptions
            });
        }
        if ($('#summary-chart').length) {
            var areaData = {
                labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
                datasets: [{
                    label: 'Sessions',
                    data: [110, 170, 130, 160, 100, 280],
                    borderColor: '#ED4A54',
                    backgroundColor: '#F07F84',
                    borderWidth: 3
                }]
            };
            var areaOptions = {
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            color: '#fff',
                        },
                        ticks: {
                            beginAtZero: false,
                            min: 0,
                            max: 300,
                            stepSize: 100
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#eff2ff',
                            display: true
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            var ctx = document.getElementById('summary-chart').getContext('2d');
            var revenueChart = new Chart(ctx, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
        if ($('#product-item-rating_1').length) {
            $('#product-item-rating_1').barrating({
                theme: 'css-stars',
                initialRating: '3',
                showSelectedRating: false
            });
        }
        if ($('#product-item-rating_2').length) {
            $('#product-item-rating_2').barrating({
                theme: 'css-stars',
                initialRating: '3',
                showSelectedRating: false
            });
        }
        if ($('#product-item-rating_3').length) {
            $('#product-item-rating_3').barrating({
                theme: 'css-stars',
                initialRating: '4',
                showSelectedRating: false
            });
        }
        if ($('.card-carousel').length) {
            $('.card-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 4500,
                items: '1',
                navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
            });
        }
        if ($('#stats-line-graph_1').length) {
            var statsLineData_1 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [12, 23, 18, 11, 10, 22, 25, 3, 16, 20, 11, 18, 7, 15, 18, 20, 17, 12, 10, 9, 21, 26, 28, 7, 15, 27],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_1').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_1,
                options: statsLineOptions
            });
        }
        if ($('#stats-line-graph_2').length) {
            var statsLineData_2 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [11, 10, 22, 25, 3, 12, 23, 18, 16, 20, 21, 26, 15, 18, 20, 17, 12, 28, 7, 15, 27, 11, 18, 7, 10, 9],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_2').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_2,
                options: statsLineOptions
            });
        }
        if ($('#stats-line-graph_3').length) {
            var statsLineData_3 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [12, 15, 18, 20, 17, 12, 15, 27, 11, 10, 22, 25, 3, 11, 18, 28, 23, 18, 16, 20, 21, 26, 4, 7, 10, 9],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_3').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_3,
                options: statsLineOptions
            });
        }
        if ($('#stats-line-graph_4').length) {
            var statsLineData_4 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [4, 7, 10, 28, 23, 18, 17, 12, 15, 27, 11, 10, 16, 20, 12, 18, 25, 3, 11, 21, 26, 15, 18, 20, 22, 9],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_4').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_4,
                options: statsLineOptions
            });
        }
        if ($('#stats-line-graph_5').length) {
            var statsLineData_5 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [28, 23, 18, 26, 15, 18, 21, 11, 10, 16, 20, 12, 9, 20, 22, 15, 27, 17, 12, 18, 25, 3, 4, 7, 10, 11],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_5').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_5,
                options: statsLineOptions
            });
        }
        if ($('#stats-line-graph_6').length) {
            var statsLineData_6 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [28, 27, 11, 18, 23, 18, 26, 12, 9, 20, 22, 15, 21, 4, 7, 10, 11, 10, 16, 20, 12, 18, 25, 3, 17, 15],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_6').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_6,
                options: statsLineOptions
            });
        }
        if ($('#stats-line-graph_7').length) {
            var statsLineData_7 = {
                labels: statsLineData.labels,
                datasets: [{
                    label: statsLineData.label,
                    data: [22, 12, 18, 25, 3, 17, 15, 10, 11, 23, 18, 26, 12, 10, 16, 20, 28, 27, 11, 18, 15, 21, 4, 7, 9, 20],
                    borderColor: statsLineData.borderColor,
                    backgroundColor: statsLineData.backgroundColor,
                    borderWidth: statsLineData.borderWidth
                }]
            };
            var ctx = document.getElementById('stats-line-graph_7').getContext('2d');
            var statsLineChart = new Chart(ctx, {
                type: 'line',
                data: statsLineData_7,
                options: statsLineOptions
            });
        }
        if ($('#sortable-table').length) {
            $('#sortable-table').tablesort();
        }
    });
})(jQuery)