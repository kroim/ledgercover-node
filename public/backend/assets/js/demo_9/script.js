(function ($) {
    'use strict';
    if ($('#server-load-data-chart-1').length) {
        var barChartCanvas = $("#server-load-data-chart-1").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'bar',
            width: 80,
            maintainAspectRatio: false,
            responsive: true,
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"],
                datasets: [{
                    label: 'Amount Due',
                    data: [39, 19, 25, 16, 31, 39, 12, 18, 33],
                    backgroundColor: "rgba(255,255,255,0.5)",
                    borderColor: "#5ad0c7"
                }]
            },
            options: {
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
                        display: false,
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.03)',
                        }
                    }],
                    xAxes: [{
                        display: false,
                        barPercentage: 0.8,
                        gridLines: {
                            display: false,
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    }
    if ($('#server-load-data-chart-2').length) {
        var barChartCanvas = $("#server-load-data-chart-2").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'bar',
            width: 80,
            maintainAspectRatio: false,
            responsive: true,
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"],
                datasets: [{
                    label: 'Amount Due',
                    data: [39, 19, 25, 16, 31, 39, 12, 18, 33],
                    backgroundColor: "rgba(255,255,255,0.5)",
                    borderColor: "#5ad0c7"
                }]
            },
            options: {
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
                        display: false,
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.03)',
                        }
                    }],
                    xAxes: [{
                        display: false,
                        barPercentage: 0.8,
                        gridLines: {
                            display: false,
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    }
    $(".navbar-toggler").on("click", function () {
        $(".sidebar-menu").toggleClass("sidebar-open");
    });
})(jQuery)