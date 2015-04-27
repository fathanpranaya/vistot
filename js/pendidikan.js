$(function () {

// Prepare demo data
    var data = [
        {
            "hc-key": "id-3700",
            "value": 0,
            "nilai": '100'
        },
        {
            "hc-key": "id-ac", //Aceh
            "value": Math.round(506036/4494410*100),
            "nilai": '1.741.447'
        },
        {
            "hc-key": "id-ki", //Kalimantan Timur
            "value": Math.round(196936/3553143*100),
            "nilai": '726.040'
        },
        {
            "hc-key": "id-jt", //Jawa Tengah
            "value": Math.round(2784410/32382657*100),
            "nilai": '12.310.674'
        },
        {
            "hc-key": "id-be", //Bengkulu
            "value": Math.round(146965/1715518*100),
            "nilai": '552.490'
        },
        {
            "hc-key": "id-bt", //Banten
            "value": Math.round(793896/10632166*100),
            "nilai": '2.815.193'
        },
        {
            "hc-key": "id-kb", //Kalimantan Barat
            "value": Math.round(336825/4395983*100),
            "nilai": '1.180.901'
        },
        {
            "hc-key": "id-bb", //Bangka Belitung
            "value": Math.round(50000/1223296*100),
            "nilai": '185.658'
        },
        {
            "hc-key": "id-ba", //Bali
            "value": Math.round(196291/3890757*100),
            "nilai": '841.230'
        },
        {
            "hc-key": "id-ji", //Jawa Timur
            "value": Math.round(2634634/37476757*100),
            "nilai": '12.634.688'
        },
        {
            "hc-key": "id-ks", //Kalimantan Selatan
            "value": Math.round(184601/3626616*100),
            "nilai": '693.732'
        },
        {
            "hc-key": "id-nt", //Nusa Tenggara Timur
            "value": Math.round(671337/4683827*100),
            "nilai": '2.241.752'
        },
        {
            "hc-key": "id-se", //Sulawesi Selatan
            "value": Math.round(645073/8034776*100),
            "nilai": '2.412.141'
        },
        {
            "hc-key": "id-kr", //Kepulauan Riau
            "value": Math.round(79321/1679163*100),
            "nilai": '307.675'
        },
        {
            "hc-key": "id-ib", //Papua Barat
            "value": Math.round(112077/760422*100),
            "nilai": '423.524'
        },
        {
            "hc-key": "id-su", //Sumatera Utara
            "value": Math.round(1161291/12982204*100),
            "nilai": '3.845.401'
        },
        {
            "hc-key": "id-ri", //Riau
            "value": Math.round(344285/5538367*100),
            "nilai": '1.169.865'
        },
        {
            "hc-key": "id-sw", //Sulawesi Utara
            "value": Math.round(192657/2270596*100),
            "nilai": '742.541'
        },
        {
            "hc-key": "id-la", //Maluku Utara
            "value": Math.round(95217/1038087*100),
            "nilai": '314.059'
        },
        {
            "hc-key": "id-sb", //Sumatera Barat
            "value": Math.round(416985/4846909*100),
            "nilai": '1.381.873'
        },
        {
            "hc-key": "id-ma", //Maluku
            "value": Math.round(208764/1533506*100),
            "nilai": '680.897'
        },
        {
            "hc-key": "id-nb", //Nusa Tenggara Barat
            "value": Math.round(508344/4500212*100),
            "nilai": '1.944.090'
        },
        {
            "hc-key": "id-sg", //Sulawesi Tenggara
            "value": Math.round(239069/2232586*100),
            "nilai": '840952'
        },
        {
            "hc-key": "id-st", //Sulawesi Tengah
            "value": Math.round(276808/2635009*100),
            "nilai": '997.106'
        },
        {
            "hc-key": "id-pa", //Papua
            "value": Math.round(576821/2833381*100),
            "nilai": '1.937.595'
        },
        {
            "hc-key": "id-1024", //Lampung
            "value": Math.round(684565/7608405*100),
            "nilai": '2.677.037'
        },
        {
            "hc-key": "id-jk", //DKI Jakarta
            "value": Math.round(323962/9607787*100),
            "nilai": '1.211.629'
        },
        {
            "hc-key": "id-jr", //Jawa Barat
            "value": Math.round(3479070/43053732*100),
            "nilai": '13.241.840'
        },
        {
            "hc-key": "id-go", //Gorontalo
            "value": Math.round(122763/1040164*100),
            "nilai": '438.832'
        },
        {
            "hc-key": "id-yo", //DI Yogyakarta
            "value": Math.round(248344/3457491*100),
            "nilai": '1.317.139'
        },
        {
            "hc-key": "id-kt", //Kalimantan Tengah
            "value": Math.round(110180/2212089*100),
            "nilai": '388.711'

        },
        {
            "hc-key": "id-sl", //Sumatera Selatan
            "value": Math.round(580424/7450394*100),
            "nilai": '2.412.141'
        },
        {
            "hc-key": "id-sr", //Sulawesi Barat
            "value": Math.round(124602/1158651*100),
            "nilai": '412.369'
        },
        {
            "hc-key": "id-ja", //Jambi
            "value": Math.round(207116/3092265*100),
            "nilai": '769.322'

        }
    ];

    // Initiate the chart
    $('#mapcontainer').highcharts('Map', {

        title : {
            text : 'Peta Kemiskinan Indonesia'
        },

        subtitle : {
            text : 'Sumber : Basis Data Terpadu Tim Nasional Percepatan Penanggulangan Kemiskinan'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 1
        },

        tooltip: {
            valueSuffix: '',
            formatter: function() {
                return this.point.name + " :" + this.point.nilai;   
            }
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/id/id-all'],
            joinBy: 'hc-key',
            name: 'Persentase Penduduk Miskin',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});


