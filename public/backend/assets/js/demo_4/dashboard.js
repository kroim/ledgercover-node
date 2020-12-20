(function ($) {
    'use strict';
    $(function () {
        var acquisitionBarOption = {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },

            scales: {
                responsive: true,
                maintainAspectRatio: true,
                yAxes: [{
                    stacked: true,
                    display: false,
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0.03)',
                    }
                }],
                xAxes: [{
                    stacked: true,
                    display: false,
                    barPercentage: 0.9,
                    gridLines: {
                        display: false,
                    }
                }]
            },
            legend: {
                display: false
            }
        };
        if ($('#acquisition-bar_1').length) {
            var acquisitionBar1 = $("#acquisition-bar_1").get(0).getContext("2d");
            var barChart = new Chart(acquisitionBar1, {
                type: 'bar',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
                    datasets: [{
                        data: [39, 19, 25, 16, 31],
                        backgroundColor: '#fff'
                    }]
                },
                options: acquisitionBarOption
            });
        }
        if ($('#acquisition-bar_2').length) {
            var acquisitionBar2 = $("#acquisition-bar_2").get(0).getContext("2d");
            var barChart = new Chart(acquisitionBar2, {
                type: 'bar',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
                    datasets: [{
                        data: [43, 24, 32, 15, 20],
                        backgroundColor: '#fff'
                    }]
                },
                options: acquisitionBarOption
            });
        }
        if ($('#acquisition-bar_3').length) {
            var acquisitionBar3 = $("#acquisition-bar_3").get(0).getContext("2d");
            var barChart = new Chart(acquisitionBar3, {
                type: 'bar',
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
                    datasets: [{
                        data: [20, 34, 22, 39, 31],
                        backgroundColor: '#fff'
                    }]
                },
                options: acquisitionBarOption
            });
        }
        if ($('#circleProgress_1').length) {
            var bar = new ProgressBar.Circle(circleProgress_1, {
                color: '#008ffb',
                strokeWidth: 15,
                trailWidth: 15,
                emptyFill: "rgb(255,243,242)",
                easing: 'easeInOut',
                duration: 1400,
            });
            bar.animate(.56); // Number from 0.0 to 1.0
        }
        if ($('#circleProgress_2').length) {
            var bar = new ProgressBar.Circle(circleProgress_2, {
                color: '#58ebb8',
                strokeWidth: 15,
                trailWidth: 15,
                easing: 'easeInOut',
                duration: 1400,
            });
            bar.animate(.22); // Number from 0.0 to 1.0
        }
        if ($('#circleProgress_3').length) {
            var bar = new ProgressBar.Circle(circleProgress_3, {
                color: '#ff5046',
                strokeWidth: 15,
                trailWidth: 15,
                easing: 'easeInOut',
                duration: 1400,
            });
            bar.animate(.30); // Number from 0.0 to 1.0
        }
        if ($('#performance-area-chart').length) {
            var performanceAreaChartCanvas = $("#performance-area-chart").get(0).getContext("2d");
            var performanceAreaChart = new Chart(performanceAreaChartCanvas, {
                type: 'line',
                data: {
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
                    datasets: [{
                        label: 'Profit',
                        data: [100, 300, 200, 350, 320, 340, 500, 360, 700, 800, 1100],
                        borderColor: "#b2d6fe",
                        backgroundColor: '#b2d6fe',
                        borderWidth: 0,
                        fill: true
                    }, {
                        label: 'Sales',
                        data: [200, 400, 300, 450, 420, 440, 600, 460, 800, 900, 1250],
                        borderColor: "#027bff",
                        borderWidth: 0,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            display: false
                        }],
                        xAxes: [{
                            display: false
                        }]
                    },
                    legend: {
                        display: false
                    },
                    elements: {
                        point: {
                            radius: 0
                        },
                        line: {
                            tension: 0
                        }
                    },
                    stepsize: 100
                }
            });
        }
    });
})(jQuery)