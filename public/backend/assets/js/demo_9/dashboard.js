(function ($) {
    'use strict';
    $(function () {
        if ($('#network-performance-chart').length) {
            var lineChartCanvas = $("#network-performance-chart").get(0).getContext("2d");
            var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(0, 0, 0, 450);
            gradientStrokeFill_1.addColorStop(1, 'rgba(255,255,255, 0.0)');
            gradientStrokeFill_1.addColorStop(0, 'rgba(102,78,235, 0.2)');
            var gradientStrokeFill_2 = lineChartCanvas.createLinearGradient(0, 0, 0, 400);
            gradientStrokeFill_2.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
            gradientStrokeFill_2.addColorStop(0, '#14c671');
            var areaData = {
                labels: ["Jan 1", "Jan 7", "Jan 14", "Jan 21", "Jan 28", "Feb 4", "Feb 11", "Feb 18"],
                datasets: [{
                    label: 'TCP Reset Packets',
                    data: [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170],
                    borderColor: infoColor,
                    backgroundColor: gradientStrokeFill_1,
                    borderWidth: 2
                }, {
                    label: 'TCP FIN Packets',
                    data: [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135],
                    borderColor: successColor,
                    backgroundColor: gradientStrokeFill_2,
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
                        radius: 3,
                        backgroundColor: "#fff"
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
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: "#858585",
                            beginAtZero: true

                        },
                        gridLines: {
                            color: '#fff',
                            display: true,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            max: 200,
                            min: 0,
                            stepSize: 50,
                            fontColor: "#858585",
                            beginAtZero: false
                        },
                        gridLines: {
                            color: '#e2e6ec',
                            display: true,
                            drawBorder: false
                        }
                    }]
                }
            }
            var revenueChart = new Chart(lineChartCanvas, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
        if ($('#network-bar-chart-1').length) {
            var barChartCanvas = $("#network-bar-chart-1").get(0).getContext("2d");
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                maintainAspectRatio: true,
                responsive: true,
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20"],
                    datasets: [{
                        label: 'Amount Due',
                        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24, 13, 16, 20, 19, 13, 9, 10, 17, 19, 20, 13, 15, 12, 18, 20],
                        backgroundColor: "#ffb400",
                        borderColor: "#ffb400"
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
                            barPercentage: 0.6,
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
        if ($('#network-bar-chart-2').length) {
            var barChartCanvas = $("#network-bar-chart-2").get(0).getContext("2d");
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                maintainAspectRatio: true,
                responsive: true,
                data: {
                    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20"],
                    datasets: [{
                        label: 'Amount Due',
                        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24, 13, 16, 20, 19, 13, 9, 10, 17, 19, 20, 13, 15, 12, 18, 20],
                        backgroundColor: "#027bff",
                        borderColor: "#027bff"
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
                            barPercentage: 0.6,
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
        if ($('#user-visits-map').length) {
            $('#user-visits-map').vectorMap({
                map: 'world_mill_en',
                panOnDrag: true,
                backgroundColor: '#fff',
                borderColor: "#fff",
                focusOn: {
                    x: 0.5,
                    y: 0.5,
                    scale: 1,
                    animate: true
                },
                series: {
                    regions: [{
                        scale: ['#f0f2f5'],
                        normalizeFunction: 'polynomial',
                        values: {
                            "AF": 16.63,
                            "AL": 11.58,
                            "DZ": 158.97,
                            "AO": 85.81,
                            "AG": 1.1,
                            "AR": 351.02,
                            "AM": 8.83,
                            "AU": 1219.72,
                            "AT": 366.26,
                            "AZ": 52.17,
                            "BS": 7.54,
                            "BH": 21.73,
                            "BD": 105.4,
                            "BB": 3.96,
                            "BY": 52.89,
                            "BE": 461.33,
                            "BZ": 1.43,
                            "BJ": 6.49,
                            "BT": 1.4,
                            "BO": 19.18,
                            "BA": 16.2,
                            "BW": 12.5,
                            "BR": 2023.53,
                            "BN": 11.96,
                            "BG": 44.84,
                            "BF": 8.67,
                            "BI": 1.47,
                            "KH": 11.36,
                            "CM": 21.88,
                            "CA": 1563.66,
                            "CV": 1.57,
                            "CF": 2.11,
                            "TD": 7.59,
                            "CL": 199.18,
                            "CN": 5745.13,
                            "CO": 283.11,
                            "KM": 0.56,
                            "CD": 12.6,
                            "CG": 11.88,
                            "CR": 35.02,
                            "CI": 22.38,
                            "HR": 59.92,
                            "CY": 22.75,
                            "CZ": 195.23,
                            "DK": 304.56,
                            "DJ": 1.14,
                            "DM": 0.38,
                            "DO": 50.87,
                            "EC": 61.49,
                            "EG": 216.83,
                            "SV": 21.8,
                            "GQ": 14.55,
                            "ER": 2.25,
                            "EE": 19.22,
                            "ET": 30.94,
                            "FJ": 3.15,
                            "FI": 231.98,
                            "FR": 2555.44,
                            "GA": 12.56,
                            "GM": 1.04,
                            "GE": 11.23,
                            "DE": 3305.9,
                            "GH": 18.06,
                            "GR": 305.01,
                            "GD": 0.65,
                            "GT": 40.77,
                            "GN": 4.34,
                            "GW": 0.83,
                            "GY": 2.2,
                            "HT": 6.5,
                            "HN": 15.34,
                            "HK": 226.49,
                            "HU": 132.28,
                            "IS": 12.77,
                            "IN": 1430.02,
                            "ID": 695.06,
                            "IR": 337.9,
                            "IQ": 84.14,
                            "IE": 204.14,
                            "IL": 201.25,
                            "IT": 2036.69,
                            "JM": 13.74,
                            "JP": 5390.9,
                            "JO": 27.13,
                            "KZ": 129.76,
                            "KE": 32.42,
                            "KI": 0.15,
                            "KR": 986.26,
                            "KW": 117.32,
                            "KG": 4.44,
                            "LA": 6.34,
                            "LV": 23.39,
                            "LB": 39.15,
                            "LS": 1.8,
                            "LR": 0.98,
                            "LY": 77.91,
                            "LT": 35.73,
                            "LU": 52.43,
                            "MK": 9.58,
                            "MG": 8.33,
                            "MW": 5.04,
                            "MY": 218.95,
                            "MV": 1.43,
                            "ML": 9.08,
                            "MT": 7.8,
                            "MR": 3.49,
                            "MU": 9.43,
                            "MX": 1004.04,
                            "MD": 5.36,
                            "MN": 5.81,
                            "ME": 3.88,
                            "MA": 91.7,
                            "MZ": 10.21,
                            "MM": 35.65,
                            "NA": 11.45,
                            "NP": 15.11,
                            "NL": 770.31,
                            "NZ": 138,
                            "NI": 6.38,
                            "NE": 5.6,
                            "NG": 206.66,
                            "NO": 413.51,
                            "OM": 53.78,
                            "PK": 174.79,
                            "PA": 27.2,
                            "PG": 8.81,
                            "PY": 17.17,
                            "PE": 153.55,
                            "PH": 189.06,
                            "PL": 438.88,
                            "PT": 223.7,
                            "QA": 126.52,
                            "RO": 158.39,
                            "RU": 1476.91,
                            "RW": 5.69,
                            "WS": 0.55,
                            "ST": 0.19,
                            "SA": 434.44,
                            "SN": 12.66,
                            "RS": 38.92,
                            "SC": 0.92,
                            "SL": 1.9,
                            "SG": 217.38,
                            "SK": 86.26,
                            "SI": 46.44,
                            "SB": 0.67,
                            "ZA": 354.41,
                            "ES": 1374.78,
                            "LK": 48.24,
                            "KN": 0.56,
                            "LC": 1,
                            "VC": 0.58,
                            "SD": 65.93,
                            "SR": 3.3,
                            "SZ": 3.17,
                            "SE": 444.59,
                            "CH": 522.44,
                            "SY": 59.63,
                            "TW": 426.98,
                            "TJ": 5.58,
                            "TZ": 22.43,
                            "TH": 312.61,
                            "TL": 0.62,
                            "TG": 3.07,
                            "TO": 0.3,
                            "TT": 21.2,
                            "TN": 43.86,
                            "TR": 729.05,
                            "TM": 0,
                            "UG": 17.12,
                            "UA": 136.56,
                            "AE": 239.65,
                            "GB": 2258.57,
                            "US": 14624.18,
                            "UY": 40.71,
                            "UZ": 37.72,
                            "VU": 0.72,
                            "VE": 285.21,
                            "VN": 101.99,
                            "YE": 30.02,
                            "ZM": 15.69,
                            "ZW": 5.57
                        }
                    }]
                }
            });
        }
        if ($('#user-traffic-bar').length) {
            // draws a rectangle with a rounded top
            Chart.helpers.drawRoundedTopRectangle = function (ctx, x, y, width, height, radius) {
                ctx.beginPath();
                ctx.moveTo(x + radius, y);
                // top right corner
                ctx.lineTo(x + width - radius, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                // bottom right	corner
                ctx.lineTo(x + width, y + height);
                // bottom left corner
                ctx.lineTo(x, y + height);
                // top left	
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
                ctx.closePath();
            };
            Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
                draw: function () {
                    var ctx = this._chart.ctx;
                    var vm = this._view;
                    var left, right, top, bottom, signX, signY, borderSkipped;
                    var borderWidth = vm.borderWidth;

                    if (!vm.horizontal) {
                        // bar
                        left = vm.x - vm.width / 2;
                        right = vm.x + vm.width / 2;
                        top = vm.y;
                        bottom = vm.base;
                        signX = 1;
                        signY = bottom > top ? 1 : -1;
                        borderSkipped = vm.borderSkipped || 'bottom';
                    } else {
                        // horizontal bar
                        left = vm.base;
                        right = vm.x;
                        top = vm.y - vm.height / 2;
                        bottom = vm.y + vm.height / 2;
                        signX = right > left ? 1 : -1;
                        signY = 1;
                        borderSkipped = vm.borderSkipped || 'left';
                    }

                    // Canvas doesn't allow us to stroke inside the width so we can
                    // adjust the sizes to fit if we're setting a stroke on the line
                    if (borderWidth) {
                        // borderWidth shold be less than bar width and bar height.
                        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
                        borderWidth = borderWidth > barSize ? barSize : borderWidth;
                        var halfStroke = borderWidth / 2;
                        // Adjust borderWidth when bar top position is near vm.base(zero).
                        var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
                        var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
                        var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
                        var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
                        // not become a vertical line?
                        if (borderLeft !== borderRight) {
                            top = borderTop;
                            bottom = borderBottom;
                        }
                        // not become a horizontal line?
                        if (borderTop !== borderBottom) {
                            left = borderLeft;
                            right = borderRight;
                        }
                    }

                    // calculate the bar width and roundess
                    var barWidth = Math.abs(left - right);
                    var roundness = this._chart.config.options.barRoundness || 0.5;
                    var radius = barWidth * roundness * 0.5;

                    // keep track of the original top of the bar
                    var prevTop = top;

                    // move the top down so there is room to draw the rounded top
                    top = prevTop + radius;
                    var barRadius = top - prevTop;

                    ctx.beginPath();
                    ctx.fillStyle = vm.backgroundColor;
                    ctx.strokeStyle = vm.borderColor;
                    ctx.lineWidth = borderWidth;

                    // draw the rounded top rectangle
                    Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);

                    ctx.fill();
                    if (borderWidth) {
                        ctx.stroke();
                    }

                    // restore the original top value so tooltips and scales still work
                    top = prevTop;
                },
            });
            Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);
            Chart.controllers.roundedBar = Chart.controllers.bar.extend({
                dataElementType: Chart.elements.RoundedTopRectangle
            });
            var ctx = document.getElementById("user-traffic-bar").getContext("2d");
            var myBar = new Chart(ctx, {
                type: 'roundedBar',
                data: {
                    labels: ["4am", "5am", "6am", "7am", "8am", "9am"],
                    datasets: [{
                        label: 'New Visitors',
                        backgroundColor: '#e5f1fe',
                        borderColor: '#e5f1fe',
                        data: [4, 6, 7, 5, 7, 4]
                    }, {
                        label: 'Returned Visitors',
                        backgroundColor: '#0e5bff',
                        borderColor: '#0e5bff',
                        data: [8, 5, 4, 2, 6, 5]
                    }]
                },
                options: {
                    responsive: true,
                    barRoundness: 1,
                    legend: false,
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "#858585",
                                beginAtZero: true

                            },
                            gridLines: {
                                color: '#fff',
                                display: true,
                                drawBorder: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 12,
                                min: 0,
                                stepSize: 3,
                                fontColor: "#858585",
                                beginAtZero: false
                            },
                            gridLines: {
                                color: '#e2e6ec',
                                display: true,
                                drawBorder: false,
                                categoryPercentage: 0.6,
                                barPercentage: 0.9
                            }
                        }]
                    }
                }
            });
        }
        if ($("#humanResouceDoughnutChart").length) {
            var doughnutChartCanvas = $("#humanResouceDoughnutChart").get(0).getContext("2d");
            var doughnutPieData = {
                datasets: [{
                    data: [20, 80, 85, 45],
                    backgroundColor: [
                        successColor,
                        primaryColor,
                        dangerColor,
                        '#e6eef2'
                    ],
                    borderColor: [
                        successColor,
                        primaryColor,
                        dangerColor,
                        '#e6eef2'
                    ],
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Human Resources',
                    'Manger',
                    'Other'
                ]
            };
            var doughnutPieOptions = {
                cutoutPercentage: 75,
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
    });
})(jQuery)