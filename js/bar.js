$(function () {

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Basic drilldown'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Sumatra',
                y: 5,
                drilldown: 'animals'
            }, {
                name: 'Jawa',
                y: 2,
                drilldown: 'fruits'
            }, {
                name: 'Bali & Nusa Tenggara',
                y: 4,
                drilldown: 'cars'
            }, {
                name: 'Kalimantan',
                y: 4,
                drilldown: 'cars'
            }, {
                name: 'Sulawesi',
                y: 4,
                drilldown: 'cars'
            }, {
                name: 'Kepulauan Maluku',
                y: 4,
                drilldown: 'cars'
            }, {
                name: 'Papua',
                y: 4,
                drilldown: 'cars'
            }]
        }],
        drilldown: {
            series: [{
                id: 'animals',
                data: [
                    ['Cats', 4],
                    ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
                ]
            }, {
                id: 'fruits',
                data: [
                    ['Apples', 4],
                    ['Oranges', 2]
                ]
            }, {
                id: 'cars',
                data: [
                    ['Toyota', 4],
                    ['Opel', 2],
                    ['Volkswagen', 2]
                ]
            }]
        }
    });
});

