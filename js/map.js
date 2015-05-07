$(function () {

// Prepare demo data
    var data = [
        {
            "hc-key": "id-3700",
            "value": 0,
            "nilai": '0',
        },
        {
            "hc-key": "id-ac", //Aceh
            "value": 1741447,
            "nilai": '1.741.447',
        },
        {
            "hc-key": "id-ki", //Kalimantan Timur
            "value": 726040,
            "nilai": '726.040',
        },
        {
            "hc-key": "id-jt", //Jawa Tengah
            "value": 12310674,
            "nilai": '12.310.674',
        },
        {
            "hc-key": "id-be", //Bengkulu
            "value": 552490,
            "nilai": '552.490',
        },
        {
            "hc-key": "id-bt", //Banten
            "value": 2815193,
            "nilai": '2.815.193',
        },
        {
            "hc-key": "id-kb", //Kalimantan Barat
            "value": 1180901,
            "nilai": '1.180.901',
        },
        {
            "hc-key": "id-bb", //Bangka Belitung
            "value": 185658,
            "nilai": '185658',
        },
        {
            "hc-key": "id-ba", //Bali
            "value": 841230,
            "nilai": '841.230',
        },
        {
            "hc-key": "id-ji", //Jawa Timur
            "value": 12634688,
            "nilai": '12.634.688',
        },
        {
            "hc-key": "id-ks", //Kalimantan Selatan
            "value": 693732,
            "nilai": '693.732',
        },
        {
            "hc-key": "id-nt", //Nusa Tenggara Timur
            "value": 2241752,
            "nilai": '2.241.752',
        },
        {
            "hc-key": "id-se", //Sulawesi Selatan
            "value": 2412141,
            "nilai": '2.412.141',
        },
        {
            "hc-key": "id-kr", //Kepulauan Riau
            "value": 307675,
            "nilai": '307.675',
        },
        {
            "hc-key": "id-ib", //Papua Barat
            "value": 423524,
            "nilai": '423.524',
        },
        {
            "hc-key": "id-su", //Sumatera Utara
            "value": 3845401,
            "nilai": '3.845.401',
        },
        {
            "hc-key": "id-ri", //Riau
            "value": 1169865,
            "nilai": '1.169.865',
        },
        {
            "hc-key": "id-sw", //Sulawesi Utara
            "value": 742541,
            "nilai": '742.541',
        },
        {
            "hc-key": "id-la", //Maluku Utara
            "value": 314059,
            "nilai": '314.059',
        },
        {
            "hc-key": "id-sb", //Sumatera Barat
            "value": 1381873,
            "nilai": '1.381.873',
        },
        {
            "hc-key": "id-ma", //Maluku
            "value": 680897,
            "nilai": '680.897',
        },
        {
            "hc-key": "id-nb", //Nusa Tenggara Barat
            "value": 1944090,
            "nilai": '1.944.090',
        },
        {
            "hc-key": "id-sg", //Sulawesi Tenggara
            "value": 840952,
            "nilai": '840.952',
        },
        {
            "hc-key": "id-st", //Sulawesi Tengah
            "value": 997106,
            "nilai": '997.106',
        },
        {
            "hc-key": "id-pa", //Papua
            "value": 1937595,
            "nilai": '1.937.595',
        },
        {
            "hc-key": "id-1024", //Lampung
            "value": 2677037,
            "nilai": '2.677.037',
        },
        {
            "hc-key": "id-jk", //DKI Jakarta
            "value": 1211629,
            "nilai": '1.211.629',
        },
        {
            "hc-key": "id-jr", //Jawa Barat
            "value": 13241840,
            "nilai": '13.241.840',
        },
        {
            "hc-key": "id-go", //Gorontalo
            "value": 438832,
            "nilai": '438.832',
        },
        {
            "hc-key": "id-yo", //DI Yogyakarta
            "value": 1317139,
            "nilai": '1.317.139',
        },
        {
            "hc-key": "id-kt", //Kalimantan Tengah
            "value": 388711,
            "nilai": '388.711',

        },
        {
            "hc-key": "id-sl", //Sumatera Selatan
            "value": 2412141,
            "nilai": '2.412.141',
        },
        {
            "hc-key": "id-sr", //Sulawesi Barat
            "value": 412369,
            "nilai": '412.369',
        },
        {
            "hc-key": "id-ja", //Jambi
            "value": 769322,
            "nilai": '769.322',

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
                return "<b>" + this.point.name + " :</b><br>" + this.point.nilai + " individu";  
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
                enabled: false,
                format: '{point.name}'
            }
        }]
    });

    $("#chartType").change(function() {
        var type = this.value;
        if (type !== '0') {
            if (type == 'kemiskinan') {
                var cdh = $('#mapcontainer').highcharts('Map', {
                    
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
                            return "<b>" + this.point.name + " :</b><br>" + this.point.nilai + " individu";  
                        }
                    },

                    series : [{
                        data : [
                            {
                                "hc-key": "id-3700",
                                "value": 0,
                                "nilai": '0',
                            },
                            {
                                "hc-key": "id-ac", //Aceh
                                "value": 1741447,
                                "nilai": '1.741.447',
                            },
                            {
                                "hc-key": "id-ki", //Kalimantan Timur
                                "value": 726040,
                                "nilai": '726.040',
                            },
                            {
                                "hc-key": "id-jt", //Jawa Tengah
                                "value": 12310674,
                                "nilai": '12.310.674',
                            },
                            {
                                "hc-key": "id-be", //Bengkulu
                                "value": 552490,
                                "nilai": '552.490',
                            },
                            {
                                "hc-key": "id-bt", //Banten
                                "value": 2815193,
                                "nilai": '2.815.193',
                            },
                            {
                                "hc-key": "id-kb", //Kalimantan Barat
                                "value": 1180901,
                                "nilai": '1.180.901',
                            },
                            {
                                "hc-key": "id-bb", //Bangka Belitung
                                "value": 185658,
                                "nilai": '185.658',
                            },
                            {
                                "hc-key": "id-ba", //Bali
                                "value": 841230,
                                "nilai": '841.230',
                            },
                            {
                                "hc-key": "id-ji", //Jawa Timur
                                "value": 12634688,
                                "nilai": '12.634.688',
                            },
                            {
                                "hc-key": "id-ks", //Kalimantan Selatan
                                "value": 693732,
                                "nilai": '693.732',
                            },
                            {
                                "hc-key": "id-nt", //Nusa Tenggara Timur
                                "value": 2241752,
                                "nilai": '2.241.752',
                            },
                            {
                                "hc-key": "id-se", //Sulawesi Selatan
                                "value": 2412141,
                                "nilai": '2.412.141',
                            },
                            {
                                "hc-key": "id-kr", //Kepulauan Riau
                                "value": 307675,
                                "nilai": '307.675',
                            },
                            {
                                "hc-key": "id-ib", //Papua Barat
                                "value": 423524,
                                "nilai": '423.524',
                            },
                            {
                                "hc-key": "id-su", //Sumatera Utara
                                "value": 3845401,
                                "nilai": '3.845.401',
                            },
                            {
                                "hc-key": "id-ri", //Riau
                                "value": 1169865,
                                "nilai": '1.169.865',
                            },
                            {
                                "hc-key": "id-sw", //Sulawesi Utara
                                "value": 742541,
                                "nilai": '742.541',
                            },
                            {
                                "hc-key": "id-la", //Maluku Utara
                                "value": 314059,
                                "nilai": '314.059',
                            },
                            {
                                "hc-key": "id-sb", //Sumatera Barat
                                "value": 1381873,
                                "nilai": '1.381.873',
                            },
                            {
                                "hc-key": "id-ma", //Maluku
                                "value": 680897,
                                "nilai": '680.897',
                            },
                            {
                                "hc-key": "id-nb", //Nusa Tenggara Barat
                                "value": 1944090,
                                "nilai": '1.944.090',
                            },
                            {
                                "hc-key": "id-sg", //Sulawesi Tenggara
                                "value": 840952,
                                "nilai": '840.952',
                            },
                            {
                                "hc-key": "id-st", //Sulawesi Tengah
                                "value": 997106,
                                "nilai": '997.106',
                            },
                            {
                                "hc-key": "id-pa", //Papua
                                "value": 1937595,
                                "nilai": '1.937.595',
                            },
                            {
                                "hc-key": "id-1024", //Lampung
                                "value": 2677037,
                                "nilai": '2.677.037',
                            },
                            {
                                "hc-key": "id-jk", //DKI Jakarta
                                "value": 1211629,
                                "nilai": '1.211.629',
                            },
                            {
                                "hc-key": "id-jr", //Jawa Barat
                                "value": 13241840,
                                "nilai": '13.241.840',
                            },
                            {
                                "hc-key": "id-go", //Gorontalo
                                "value": 438832,
                                "nilai": '438.832',
                            },
                            {
                                "hc-key": "id-yo", //DI Yogyakarta
                                "value": 1317139,
                                "nilai": '1.317.139',
                            },
                            {
                                "hc-key": "id-kt", //Kalimantan Tengah
                                "value": 388711,
                                "nilai": '388.711',

                            },
                            {
                                "hc-key": "id-sl", //Sumatera Selatan
                                "value": 2412141,
                                "nilai": '2.412.141',
                            },
                            {
                                "hc-key": "id-sr", //Sulawesi Barat
                                "value": 412369,
                                "nilai": '412.369',
                            },
                            {
                                "hc-key": "id-ja", //Jambi
                                "value": 769322,
                                "nilai": '769.322',

                            }
                        ],
                        mapData: Highcharts.maps['countries/id/id-all'],
                        joinBy: 'hc-key',
                        name: 'Persentase Penduduk Miskin',
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        },
                        dataLabels: {
                            enabled: false,
                            format: '{point.name}'
                        }
                    }]
                });
            } else if (type == 'pendidikan') {
                var cdh = $('#mapcontainer').highcharts('Map', {
                    title : {
                        text : 'Peta Pendidikan Indonesia'
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
                            return "<b>" + this.point.name + " :</b><br>" + this.point.nilai + " individu";  
                        }
                    },

                    series : [{
                        data : [
                            {
                                "hc-key": "id-3700",
                                "value": 0,
                                "nilai": '0',
                            },
                            {
                                "hc-key": "id-ac", //Aceh
                                "value": 506036,
                                "nilai": '506.036',
                            },
                            {
                                "hc-key": "id-ki", //Kalimantan Timur
                                "value": 196936,
                                "nilai": '196.936',
                            },
                            {
                                "hc-key": "id-jt", //Jawa Tengah
                                "value": 2784410,
                                "nilai": '2.784.410',
                            },
                            {
                                "hc-key": "id-be", //Bengkulu
                                "value": 146965,
                                "nilai": '146.965',
                            },
                            {
                                "hc-key": "id-bt", //Banten
                                "value": 793896,
                                "nilai": '793.896',
                            },
                            {
                                "hc-key": "id-kb", //Kalimantan Barat
                                "value": 336825,
                                "nilai": '336.825',
                            },
                            {
                                "hc-key": "id-bb", //Bangka Belitung
                                "value": 50000,
                                "nilai": '50.000',
                            },
                            {
                                "hc-key": "id-ba", //Bali
                                "value": 196291,
                                "nilai": '196.291',
                            },
                            {
                                "hc-key": "id-ji", //Jawa Timur
                                "value": 2634634,
                                "nilai": '2.634.634',
                            },
                            {
                                "hc-key": "id-ks", //Kalimantan Selatan
                                "value": 184601,
                                "nilai": '184.601',
                            },
                            {
                                "hc-key": "id-nt", //Nusa Tenggara Timur
                                "value": 671337,
                                "nilai": '671.337',
                            },
                            {
                                "hc-key": "id-se", //Sulawesi Selatan
                                "value": 645073,
                                "nilai": '645.073',
                            },
                            {
                                "hc-key": "id-kr", //Kepulauan Riau
                                "value": 79321,
                                "nilai": '79.321',
                            },
                            {
                                "hc-key": "id-ib", //Papua Barat
                                "value": 112077,
                                "nilai": '112.077',
                            },
                            {
                                "hc-key": "id-su", //Sumatera Utara
                                "value": 1161291,
                                "nilai": '1.161.291',
                            },
                            {
                                "hc-key": "id-ri", //Riau
                                "value": 344285,
                                "nilai": '344.285',
                            },
                            {
                                "hc-key": "id-sw", //Sulawesi Utara
                                "value": 192657,
                                "nilai": '192.657',
                            },
                            {
                                "hc-key": "id-la", //Maluku Utara
                                "value": 95217,
                                "nilai": '95.217',
                            },
                            {
                                "hc-key": "id-sb", //Sumatera Barat
                                "value": 416985,
                                "nilai": '416.985',
                            },
                            {
                                "hc-key": "id-ma", //Maluku
                                "value": 208764,
                                "nilai": '208.764',
                            },
                            {
                                "hc-key": "id-nb", //Nusa Tenggara Barat
                                "value": 508344,
                                "nilai": '508.344',
                            },
                            {
                                "hc-key": "id-sg", //Sulawesi Tenggara
                                "value": 239069,
                                "nilai": '239.069',
                            },
                            {
                                "hc-key": "id-st", //Sulawesi Tengah
                                "value": 276808,
                                "nilai": '276.808',
                            },
                            {
                                "hc-key": "id-pa", //Papua
                                "value": 576821,
                                "nilai": '576.821',
                            },
                            {
                                "hc-key": "id-1024", //Lampung
                                "value": 684565,
                                "nilai": '684.565',
                            },
                            {
                                "hc-key": "id-jk", //DKI Jakarta
                                "value": 323962,
                                "nilai": '323.962',
                            },
                            {
                                "hc-key": "id-jr", //Jawa Barat
                                "value": 3479070,
                                "nilai": '3.479.070',
                            },
                            {
                                "hc-key": "id-go", //Gorontalo
                                "value": 122763,
                                "nilai": '122.763',
                            },
                            {
                                "hc-key": "id-yo", //DI Yogyakarta
                                "value": 248344,
                                "nilai": '248.344',
                            },
                            {
                                "hc-key": "id-kt", //Kalimantan Tengah
                                "value": 110180,
                                "nilai": '110.180',

                            },
                            {
                                "hc-key": "id-sl", //Sumatera Selatan
                                "value": 580424,
                                "nilai": '580.424',
                            },
                            {
                                "hc-key": "id-sr", //Sulawesi Barat
                                "value": 124602,
                                "nilai": '124.602',
                            },
                            {
                                "hc-key": "id-ja", //Jambi
                                "value": 207116,
                                "nilai": '207.116',

                            }
                        ],
                        mapData: Highcharts.maps['countries/id/id-all'],
                        joinBy: 'hc-key',
                        name: 'Persentase Penduduk Miskin',
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        },
                        dataLabels: {
                            enabled: false,
                            format: '{point.name}'
                        }
                    }]
                });
            } else if (type == 'pekerjaan') {
                var cdh = $('#mapcontainer').highcharts('Map', {
                    title : {
                        text : 'Peta Status Pekerjaan Indonesia'
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
                            return "<b>" + this.point.name + " :</b><br>" + this.point.nilai + " individu";  
                        }
                    },

                    series : [{
                        data : [
                            {
                                "hc-key": "id-3700",
                                "value": 0,
                                "nilai": '0',
                            },
                            {
                                "hc-key": "id-ac", //Aceh
                                "value": 81548,
                                "nilai": '81.548',
                            },
                            {
                                "hc-key": "id-ki", //Kalimantan Timur
                                "value": 383657,
                                "nilai": '383.657',
                            },
                            {
                                "hc-key": "id-jt", //Jawa Tengah
                                "value": 5324557,
                                "nilai": '5.324.557',
                            },
                            {
                                "hc-key": "id-be", //Bengkulu
                                "value": 222692,
                                "nilai": '222.692',
                            },
                            {
                                "hc-key": "id-bt", //Banten
                                "value": 1585755,
                                "nilai": '1.585.755',
                            },
                            {
                                "hc-key": "id-kb", //Kalimantan Barat
                                "value": 492750,
                                "nilai": '492.750',
                            },
                            {
                                "hc-key": "id-bb", //Bangka Belitung
                                "value": 96051,
                                "nilai": '96.051',
                            },
                            {
                                "hc-key": "id-ba", //Bali
                                "value": 302647,
                                "nilai": '302.647',
                            },
                            {
                                "hc-key": "id-ji", //Jawa Timur
                                "value": 5404612,
                                "nilai": '5.404.612',
                            },
                            {
                                "hc-key": "id-ks", //Kalimantan Selatan
                                "value": 315761,
                                "nilai": '315.761',
                            },
                            {
                                "hc-key": "id-nt", //Nusa Tenggara Timur
                                "value": 856862,
                                "nilai": '856.862',
                            },
                            {
                                "hc-key": "id-se", //Sulawesi Selatan
                                "value": 1235756,
                                "nilai": '1.235.756',
                            },
                            {
                                "hc-key": "id-kr", //Kepulauan Riau
                                "value": 170349,
                                "nilai": '170.349',
                            },
                            {
                                "hc-key": "id-ib", //Papua Barat
                                "value": 171228,
                                "nilai": '171.228',
                            },
                            {
                                "hc-key": "id-su", //Sumatera Utara
                                "value": 1808161,
                                "nilai": '1.808.161',
                            },
                            {
                                "hc-key": "id-ri", //Riau
                                "value": 620086,
                                "nilai": '620.086',
                            },
                            {
                                "hc-key": "id-sw", //Sulawesi Utara
                                "value": 405479,
                                "nilai": '405.479',
                            },
                            {
                                "hc-key": "id-la", //Maluku Utara
                                "value": 146156,
                                "nilai": '146.156',
                            },
                            {
                                "hc-key": "id-sb", //Sumatera Barat
                                "value": 698305,
                                "nilai": '698.305',
                            },
                            {
                                "hc-key": "id-ma", //Maluku
                                "value": 331456,
                                "nilai": '331.456',
                            },
                            {
                                "hc-key": "id-nb", //Nusa Tenggara Barat
                                "value": 926361,
                                "nilai": '926.361',
                            },
                            {
                                "hc-key": "id-sg", //Sulawesi Tenggara
                                "value": 355527,
                                "nilai": '355.527',
                            },
                            {
                                "hc-key": "id-st", //Sulawesi Tengah
                                "value": 471808,
                                "nilai": '471.808',
                            },
                            {
                                "hc-key": "id-pa", //Papua
                                "value": 440967,
                                "nilai": '440.967',
                            },
                            {
                                "hc-key": "id-1024", //Lampung
                                "value": 1207835,
                                "nilai": '1.207.835',
                            },
                            {
                                "hc-key": "id-jk", //DKI Jakarta
                                "value": 691347,
                                "nilai": '691.347',
                            },
                            {
                                "hc-key": "id-jr", //Jawa Barat
                                "value": 7399351,
                                "nilai": '7.399.351',
                            },
                            {
                                "hc-key": "id-go", //Gorontalo
                                "value": 223639,
                                "nilai": '223.639',
                            },
                            {
                                "hc-key": "id-yo", //DI Yogyakarta
                                "value": 482325,
                                "nilai": '482.325',
                            },
                            {
                                "hc-key": "id-kt", //Kalimantan Tengah
                                "value": 169677,
                                "nilai": '169.677',

                            },
                            {
                                "hc-key": "id-sl", //Sumatera Selatan
                                "value": 997548,
                                "nilai": '997.548',
                            },
                            {
                                "hc-key": "id-sr", //Sulawesi Barat
                                "value": 176632,
                                "nilai": '176.632',
                            },
                            {
                                "hc-key": "id-ja", //Jambi
                                "value": 372106,
                                "nilai": '372.106',

                            }
                        ],
                        mapData: Highcharts.maps['countries/id/id-all'],
                        joinBy: 'hc-key',
                        name: 'Persentase Penduduk Miskin',
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        },
                        dataLabels: {
                            enabled: false,
                            format: '{point.name}'
                        }
                    }]
                });
            }
        }
    });
});


