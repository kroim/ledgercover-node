(function ($) {
    'use strict';
    $(function () {
        $.fn.andSelf = function () {
            return this.addBack.apply(this, arguments);
        }
        if ($('#traffic-report-chart').length) {
            var areaData = {
                labels: ["100", "200", "300", "400", "500"],
                datasets: [{
                        label: 'Online Payment',
                        data: [130, 245, 155, 300, 150],
                        borderColor: infoColor,
                        backgroundColor: infoColor,
                        borderWidth: 2,
                        fill: false
                    }, {
                        label: 'Offline Sales',
                        data: [50, 150, 135, 230, 130],
                        borderColor: successColor,
                        backgroundColor: successColor,
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        label: 'Completion',
                        data: [0, 60, 49, 150, 120],
                        borderColor: warningColor,
                        backgroundColor: warningColor,
                        borderWidth: 2,
                        fill: false
                    }
                ]
            };
            var areaOptions = {
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                elements: {
                    point: {
                        radius: 2
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
                        display: false,
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                            color: '#1F1F1F'
                        },

                    }]
                }
            }
            var ctx = document.getElementById('traffic-report-chart').getContext('2d');
            var revenueChart = new Chart(ctx, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
        if ($("#soft-limit-1").length) {
            var softSlider = document.getElementById('soft-limit-1');

            noUiSlider.create(softSlider, {
                start: 1300,
                connect: [true, false],
                tooltips: false,
                range: {
                    min: 0,
                    max: 1500
                },
                pips: {
                    mode: 'values',
                    values: [0, 250, 500, 750, 1000, 1250, 1500],
                    density: 4,
                }
            });
        }
        if ($("#soft-limit-2").length) {
            var softSlider = document.getElementById('soft-limit-2');

            noUiSlider.create(softSlider, {
                start: 1000,
                tooltips: false,
                connect: [true, false],
                range: {
                    min: 0,
                    max: 1500
                },
                pips: {
                    mode: 'values',
                    values: [0, 250, 500, 750, 1000, 1250, 1500],
                    density: 4,
                }
            });
        }
    });
})(jQuery)