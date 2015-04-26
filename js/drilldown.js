$(function () {

    // Create the chart
    $('#drilldown').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Persebaran Kemiskinan di Indonesia'
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
            name: 'Pulau',
            colorByPoint: true,
            data: [{
                name: 'Kalimantan',
                y: 2989384,
                drilldown: 'kalimantan'
            }, {
                name: 'Sumatera',
                y: 14739532,
                drilldown: 'sumatera'
            }, {
                name: 'Jawa',
                y: 43531163,
                drilldown: 'jawa'
            },
                {
                name: 'Bali dan Nusa Tenggara',
                y: 5027072,
                drilldown: 'balint'
            },
                {
                name: 'Sulawesi',
                y: 5843941,
                drilldown: 'sulawesi'
            },
                {
                name: 'Kepulauan Maluku',
                y: 994956,
                drilldown: 'kepulauanmaluku'
            },
                {
                name: 'Papua',
                y: 2361119,
                drilldown: 'papua'
            }]
        }],
        drilldown: {
            series: [{
                id: 'kalimantan',
                data: [
                    ['Kalimantan Barat', 1180901],
                    ['Kalimantan Tengah', 388711],
                    ['Kalimantan Selatan', 693732],
                    ['Kalimantan Timur', 726040]
                ]
            }, 
                {
                id: 'sumatera',
                data: [
                    ['Aceh', 1741447],
                    ['Sumatera Utara', 3845401],
                    ['Sumatera Barat', 1381873],
                    ['Riau', 1169865],
                    ['Jambi', 769322],
                    ['Sumatera Selatan', 2108764],
                    ['Bengkulu', 552490],
                    ['Lampung', 2677037],
                    ['Bangka Belitung', 185658],
                    ['Kepulauan Riau', 307675]
                ]
            },

             {
                id: 'jawa',
                data: [
                    ['DKI Jakarta', 1211629],
                    ['Jawa Barat', 13241840],
                    ['Jawa Tengah', 12310674],
                    ['DI Yogyakarta', 1317139],
                    ['Jawa Timur', 12634688],
                    ['Banten', 2815193]
                ]
            },

            {
                id: 'jawa',
                data: [
                    ['DKI Jakarta', 1211629],
                    ['Jawa Barat', 13241840],
                    ['Jawa Tengah', 12310674],
                    ['DI Yogyakarta', 1317139],
                    ['Jawa Timur', 12634688],
                    ['Banten', 2815193]
                ]
            },

            {
                id: 'balint',
                data: [
                    ['Bali', 841230],
                    ['Nusa Tenggara Barat', 1944090],
                    ['Nusa Tenggara Timur', 2241752]
                ]
            },

            {
                id: 'sulawesi',
                data: [
                    ['Sulawesi Utara', 742541],
                    ['Sulawesi Tengah', 997106],
                    ['Sulawesi Selatan', 2412141],
                    ['Sulawesi Tenggara', 840952],
                    ['Gorontalo', 438832],
                    ['Sulawesi Barat', 412369]
                ]
            },

            {
                id: 'kepulauanmaluku',
                data: [
                    ['Maluku', 680897],
                    ['Maluku Utara', 314059]
                ]
            },

            {
                id: 'papua',
                data: [
                    ['Papua', 1937595],
                    ['Papua Barat', 423524]
                ]
            },
            ]
        }
    });
});