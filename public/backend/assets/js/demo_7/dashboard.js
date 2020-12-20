(function ($) {
    'use strict';
    $(function () {
        if ($('#analytics-metrics').length) {
            var areaData = {
                labels: ["1", "2", "3", "4", "5", "6"],
                datasets: [{
                    label: 'Sessions',
                    data: [8, 7, 3, 16, 10, 28],
                    borderColor: '#5B3ED2',
                    backgroundColor: '#7644DB',
                    borderWidth: 3
                }, {
                    label: 'Users',
                    data: [28, 10, 15, 45, 30, 68],
                    borderColor: '#227EF6',
                    backgroundColor: '#6AA7E9',
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
                        radius: 3
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
                stepsize: 150,
                min: 0,
                max: 350,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            color: '#fff',
                        },
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 70,
                            stepSize: 20
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
            var ctx = document.getElementById('analytics-metrics').getContext('2d');
            var revenueChart = new Chart(ctx, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
        if ($('#users-by-region').length) {
            var options = {
                type: 'bubble',
                data: {
                    datasets: [{
                            label: 'John',
                            data: [{
                                x: 3,
                                y: 10,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 2,
                                y: 2,
                                r: 10
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        }, {
                            label: 'Paul',
                            data: [{
                                x: 12,
                                y: 32,
                                r: 13
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 29,
                                y: 52,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 49,
                                y: 62,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 22,
                                y: 22,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 23,
                                y: 25,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 12,
                                y: 10,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 34,
                                y: 23,
                                r: 5
                            }],
                            backgroundColor: "#027bff",
                            borderColor: "#027bff",
                            borderWidth: 0,
                            hoverBackgroundColor: "#027bff"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 30,
                                y: 20,
                                r: 10
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 12,
                                y: 17,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 32,
                                y: 37,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 52,
                                y: 57,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        },
                        {
                            label: 'Paul',
                            data: [{
                                x: 77,
                                y: 40,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        }, {
                            label: 'Paul',
                            data: [{
                                x: 67,
                                y: 40,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        }, {
                            label: 'Paul',
                            data: [{
                                x: 47,
                                y: 20,
                                r: 10
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        }, {
                            label: 'Paul',
                            data: [{
                                x: 77,
                                y: 10,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        }, {
                            label: 'Paul',
                            data: [{
                                x: 57,
                                y: 10,
                                r: 10
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        }, {
                            label: 'Paul',
                            data: [{
                                x: 57,
                                y: 40,
                                r: 5
                            }],
                            backgroundColor: "#664eeb",
                            borderColor: "#664eeb",
                            borderWidth: 0,
                            hoverBackgroundColor: "#664eeb"
                        }
                    ]
                },
                options: {
                    legend: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                                color: '#fff',
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
            }

            var ctx = document.getElementById('users-by-region').getContext('2d');
            new Chart(ctx, options);
        }
        if ($("#CMDoughnutChart").length) {
            var doughnutChartCanvas = $("#CMDoughnutChart").get(0).getContext("2d");
            var doughnutPieData = {
                datasets: [{
                    data: [70, 20],
                    backgroundColor: ['#664eeb', '#027bff'],
                    borderColor: ['#664eeb', '#027bff'],
                }],
                labels: [
                    'Chrome',
                    'Firefox',
                    'Safari',
                    'Opera',
                    'IE',
                ]
            };
            var doughnutPieOptions = {
                cutoutPercentage: 70,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
                maintainAspectRatio: true,
                showScale: true,
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            };
            var doughnutChart = new Chart(doughnutChartCanvas, {
                type: 'doughnut',
                data: doughnutPieData,
                options: doughnutPieOptions
            });
        }
        if ($('#CMAreaChart').length) {
            var chart = document.getElementById('CMAreaChart').getContext('2d'),
                gradient_1 = chart.createLinearGradient(0, 0, 0, 190);
            gradient_1.addColorStop(0, 'rgb(122, 92, 225,1)');
            gradient_1.addColorStop(0.5, 'rgb(122, 92, 225,0.25)');
            gradient_1.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
            var areaData = {
                labels: [
                    "Day01",
                    "Day02",
                    "Day03",
                    "Day04",
                    "Day05",
                    "Day06",
                    "Day07",
                    "Day08",
                    "Day09",
                    "Day10",
                    "Day11",
                    "Day12",
                    "Day13",
                    "Day14",
                    "Day15",
                    "Day16",
                    "Day17",
                    "Day18",
                    "Day19",
                    "Day20",
                    "Day21",
                    "Day22",
                    "Day23",
                    "Day24",
                    "Day25",
                    "Day26",
                    "Day27",
                    "Day28",
                    "Day29",
                    "Day30",
                    "Day31",
                    "Day32",
                    "Day33",
                    "Day34",
                    "Day35",
                    "Day36",
                    "Day37",
                    "Day38",
                    "Day39",
                    "Day40",
                    "Day41",
                    "Day42",
                    "Day43",
                    "Day44",
                    "Day45",
                    "Day46",
                    "Day47",
                    "Day48",
                    "Day49",
                    "Day50",
                    "Day51",
                    "Day52",
                    "Day53",
                    "Day54",
                    "Day55",
                    "Day56",
                    "Day57",
                    "Day58",
                    "Day59",
                    "Day60",
                    "Day61",
                    "Day62",
                    "Day63",
                    "Day64",
                    "Day65",
                    "Day66",
                    "Day67",
                    "Day68",
                    "Day69",
                    "Day70",
                    "Day71",
                    "Day72",
                    "Day73",
                    "Day74",
                    "Day75",
                    "Day76",
                    "Day77",
                    "Day78",
                    "Day79",
                    "Day80",
                    "Day81",
                    "Day82"
                ],
                datasets: [{
                    label: 'Sessions',
                    data: [
                        56,
                        55,
                        59,
                        59,
                        59,
                        57,
                        56,
                        57,
                        54,
                        56,
                        58,
                        57,
                        59,
                        58,
                        59,
                        57,
                        55,
                        56,
                        54,
                        52,
                        49,
                        48,
                        50,
                        50,
                        46,
                        45,
                        49,
                        50,
                        52,
                        53,
                        52,
                        55,
                        54,
                        53,
                        56,
                        55,
                        56,
                        55,
                        54,
                        55,
                        57,
                        58,
                        56,
                        55,
                        56,
                        57,
                        58,
                        59,
                        58,
                        57,
                        55,
                        53,
                        52,
                        55,
                        57,
                        55,
                        54,
                        52,
                        55,
                        57,
                        56,
                        57,
                        58,
                        59,
                        58,
                        59,
                        57,
                        56,
                        55,
                        57,
                        58,
                        59,
                        60,
                        62,
                        60,
                        59,
                        58,
                        57,
                        56,
                        57,
                        56,
                        58,
                        59
                    ],
                    borderColor: '#5B3ED2',
                    backgroundColor: gradient_1,
                    borderWidth: 3
                }, {
                    label: 'Users',
                    data: [32,
                        25,
                        29,
                        29,
                        29,
                        27,
                        26,
                        27,
                        24,
                        26,
                        28,
                        27,
                        29,
                        28,
                        29,
                        27,
                        25,
                        26,
                        24,
                        20,
                        18,
                        21,
                        19,
                        17,
                        14,
                        13,
                        16,
                        15,
                        17,
                        18,
                        19,
                        22,
                        20,
                        23,
                        21,
                        25,
                        24,
                        22,
                        25,
                        27,
                        25,
                        26,
                        24,
                        20,
                        18,
                        18,
                        18,
                        22,
                        19,
                        23,
                        25,
                        23,
                        22,
                        25,
                        27,
                        25,
                        24,
                        22,
                        25,
                        27,
                        26,
                        27,
                        28,
                        29,
                        28,
                        29,
                        27,
                        26,
                        25,
                        27,
                        28,
                        29,
                        26,
                        27,
                        25,
                        29,
                        28,
                        27,
                        26,
                        27,
                        26,
                        28,
                        29
                    ],
                    borderColor: '#027bff',
                    backgroundColor: '#fff',
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
                    },
                    line: {
                        tension: 0
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
                stepsize: 150,
                min: 0,
                max: 350,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            color: '#fff',
                        },
                        scaleLabel: {
                            display: true,
                        },
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 7,
                            maxRotation: 0,
                            labelOffset: 30
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#eff2ff',
                            display: true
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 20
                        }
                    }]
                }
            }
            var chartInstance = new Chart(chart, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
    });
})(jQuery)