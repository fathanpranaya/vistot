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
            data: [
            {
                name: 'Kalimantan',
                y: Math.round(2989384/13787831 *100),
                drilldown: 'kalimantan'
            }, {
                name: 'Sumatera',
                y: Math.round(14739532/50630931 *100),
                drilldown: 'sumatera'
            }, {
                name: 'Jawa',
                y: Math.round(43531163/136610590 *100),
                drilldown: 'jawa'
            },
                {
                name: 'Sulawesi',
                y: Math.round(5843941/17371782 *100),
                drilldown: 'sulawesi'
            },

            {
                name: 'Bali dan Nusa Tenggara',
                y: Math.round(5027072/13074796 *100),
                drilldown: 'balint'
            },
                {
                name: 'Kepulauan Maluku',
                y: Math.round(994956/2571593 *100),
                drilldown: 'kepulauanmaluku'
            },
                {
                name: 'Papua',
                y: Math.round(2361119/3593803 *100),
                drilldown: 'papua'
            }]
        }],
        drilldown: {
            series: [{
                id: 'kalimantan',
                data: [
                    ['Kalimantan Tengah', Math.round(388711/2212089 *100)],
                    ['Kalimantan Selatan', Math.round(693732/3626616 *100)],
                    ['Kalimantan Timur', Math.round(726040/3553143 *100)],
                    ['Kalimantan Barat', Math.round(1180901/4395983 *100)]
                ]
            }, 
                {
                id: 'sumatera',
                data: [
                    ['Bangka Belitung', Math.round(185658/1223296 *100)],
                    ['Kepulauan Riau', Math.round(307675/1679163 *100)],
                    ['Riau', Math.round(1169865/5538367 *100)],
                    ['Jambi', Math.round(769322/3092265 *100)],
                    ['Sumatera Barat', Math.round(1381873/4846909 *100)],
                    ['Sumatera Utara', Math.round(3845401/12982204 *100)],
                    ['Sumatera Selatan', Math.round(2412141/7450394 *100)],
                    ['Bengkulu', Math.round(552490/1715518 *100)],
                    ['Lampung', Math.round(2677037/7608405 *100)],
                    ['Aceh', Math.round(1741447/4494410 *100)]
                ]
            },

             {
                id: 'jawa',
                data: [
                    ['DKI Jakarta', Math.round(1211629/9607787 *100)],
                    ['Banten', Math.round(2815193/10632166 *100)],
                    ['Jawa Barat', Math.round(13241840/43053732 *100)],
                    ['Jawa Timur', Math.round(12634688/37476757 *100)],
                    ['Jawa Tengah', Math.round(12310674/32382657 *100)],
                    ['DI Yogyakarta', Math.round(1317139/3457491 *100)]
                    
                    
                ]
            },

            {
                id: 'balint',
                data: [
                    ['Bali', Math.round(841230/3890757 *100)],
                    ['Nusa Tenggara Barat', Math.round(1944090/4500212 *100)],
                    ['Nusa Tenggara Timur', Math.round(2241752/4683827 *100)]
                ]
            },

            {
                id: 'sulawesi',
                data: [
                    ['Sulawesi Selatan', Math.round(2412141/8034776 *100)],
                    ['Sulawesi Utara', Math.round(742541/2270596 *100)],
                    ['Sulawesi Barat', Math.round(412369/1158651 *100)],
                    ['Sulawesi Tengah', Math.round(997106/2635009 *100)],
                    ['Sulawesi Tenggara', Math.round(840952/2232586 *100)],
                    ['Gorontalo', Math.round(438832/1040164 *100)]
                    
                ]
            },

            {
                id: 'kepulauanmaluku',
                data: [
                    ['Maluku Utara', Math.round(314059/1038087 *100)],
                    ['Maluku', Math.round(680897/1533506 *100)]
                ]
            },

            {
                id: 'papua',
                data: [
                    ['Papua Barat', Math.round(423524/760422 *100)],
                    ['Papua', Math.round(1937595/2833381 *100)]
                ]
            },
            ]
        }
    });
});