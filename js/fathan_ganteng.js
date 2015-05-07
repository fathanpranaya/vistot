$(function () {

    /*
    TODO:
    - Check data labels after drilling. Label rank? New positions?
    - Not US Mainland text
    - Separators
    */

    var data = [
        {
            "hc-key": "id-3700",
            "value": 0,
            "nilai": '100'
        },
        {
            "hc-key": "id-ac", //Aceh
            "value": Math.round(1741447/4494410*100),
            "nilai": '1.741.447'
        },
        {
            "hc-key": "id-ki", //Kalimantan Timur
            "value": Math.round(726040/3553143*100),
            "nilai": '726.040'
        },
        {
            "hc-key": "id-jt", //Jawa Tengah
            "value": Math.round(12310674/32382657*100),
            "nilai": '12.310.674'
        },
        {
            "hc-key": "id-be", //Bengkulu
            "value": Math.round(552490/1715518*100),
            "nilai": '552.490'
        },
        {
            "hc-key": "id-bt", //Banten
            "value": Math.round(2815193/10632166*100),
            "nilai": '2.815.193'
        },
        {
            "hc-key": "id-kb", //Kalimantan Barat
            "value": Math.round(1180901/4395983*100),
            "nilai": '1.180.901'
        },
        {
            "hc-key": "id-bb", //Bangka Belitung
            "value": Math.round(185658/1223296*100),
            "nilai": '185.658'
        },
        {
            "hc-key": "id-ba", //Bali
            "value": Math.round(841230/3890757*100),
            "nilai": '841.230'
        },
        {
            "hc-key": "id-ji", //Jawa Timur
            "value": Math.round(12634688/37476757*100),
            "nilai": '12.634.688'
        },
        {
            "hc-key": "id-ks", //Kalimantan Selatan
            "value": Math.round(693732/3626616*100),
            "nilai": '693.732'
        },
        {
            "hc-key": "id-nt", //Nusa Tenggara Timur
            "value": Math.round(2241752/4683827*100),
            "nilai": '2.241.752'
        },
        {
            "hc-key": "id-se", //Sulawesi Selatan
            "value": Math.round(2412141/8034776*100),
            "nilai": '2.412.141'
        },
        {
            "hc-key": "id-kr", //Kepulauan Riau
            "value": Math.round(307675/1679163*100),
            "nilai": '307.675'
        },
        {
            "hc-key": "id-ib", //Papua Barat
            "value": Math.round(423524/760422*100),
            "nilai": '423.524'
        },
        {
            "hc-key": "id-su", //Sumatera Utara
            "value": Math.round(3845401/12982204*100),
            "nilai": '3.845.401'
        },
        {
            "hc-key": "id-ri", //Riau
            "value": Math.round(1169865/5538367*100),
            "nilai": '1.169.865'
        },
        {
            "hc-key": "id-sw", //Sulawesi Utara
            "value": Math.round(742541/2270596*100),
            "nilai": '742.541'
        },
        {
            "hc-key": "id-la", //Maluku Utara
            "value": Math.round(314059/1038087*100),
            "nilai": '314.059'
        },
        {
            "hc-key": "id-sb", //Sumatera Barat
            "value": Math.round(1381873/4846909*100),
            "nilai": '1.381.873'
        },
        {
            "hc-key": "id-ma", //Maluku
            "value": Math.round(680897/1533506*100),
            "nilai": '680.897'
        },
        {
            "hc-key": "id-nb", //Nusa Tenggara Barat
            "value": Math.round(1944090/4500212*100),
            "nilai": '1.944.090'
        },
        {
            "hc-key": "id-sg", //Sulawesi Tenggara
            "value": Math.round(840952/2232586*100),
            "nilai": '840952'
        },
        {
            "hc-key": "id-st", //Sulawesi Tengah
            "value": Math.round(997106/2635009*100),
            "nilai": '997.106'
        },
        {
            "hc-key": "id-pa", //Papua
            "value": Math.round(1937595/2833381*100),
            "nilai": '1.937.595'
        },
        {
            "hc-key": "id-1024", //Lampung
            "value": Math.round(2677037/7608405*100),
            "nilai": '2.677.037'
        },
        {
            "hc-key": "id-jk", //DKI Jakarta
            "value": Math.round(1211629/9607787*100),
            "nilai": '1.211.629'
        },
        {
            "hc-key": "id-jr", //Jawa Barat
            "value": Math.round(13241840/43053732*100),
            "nilai": '13.241.840'
        },
        {
            "hc-key": "id-go", //Gorontalo
            "value": Math.round(438832/1040164*100),
            "nilai": '438.832'
        },
        {
            "hc-key": "id-yo", //DI Yogyakarta
            "value": Math.round(1317139/3457491*100),
            "nilai": '1.317.139'
        },
        {
            "hc-key": "id-kt", //Kalimantan Tengah
            "value": Math.round(388711/2212089*100),
            "nilai": '388.711'

        },
        {
            "hc-key": "id-sl", //Sumatera Selatan
            "value": Math.round(2412141/7450394*100),
            "nilai": '2.412.141'
        },
        {
            "hc-key": "id-sr", //Sulawesi Barat
            "value": Math.round(412369/1158651*100),
            "nilai": '412.369'
        },
        {
            "hc-key": "id-ja", //Jambi
            "value": Math.round(769322/3092265*100),
            "nilai": '769.322'

        }
    ];

    var map_data = Highcharts.geojson(Highcharts.maps["countries/id/id-all"]);

    // Set drilldown pointers
    $.each(map_data, function (i) {
        this.drilldown = this.properties['name'];
    });

    // Instanciate the map
    $('#container').highcharts('Map', {
        chart : {
            events: {
                drilldown: function (e) {

                    if (!e.seriesOptions) {
                        var chart = this,
                            mapKey = e.point.drilldown,
                            // Handle error, the timeout is cleared on success
                            fail = setTimeout(function () {
                                if (!Highcharts.maps[mapKey]) {
                                    chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);

                                    fail = setTimeout(function () {
                                        chart.hideLoading();
                                    }, 1000);
                                }
                            }, 3000);

                        // Show the spinner
                        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

                        // Load the drilldown map
                        $.getScript('js/district/' + mapKey + '.js', function () {

                            // data = Highcharts.geojson(Highcharts.maps[mapKey]);

                            console.log(data);

                            // Set a non-random bogus value
                            $.each(data, function (i) {
                                this.value = i;
                            });

                            // Hide loading and add series
                            chart.hideLoading();
                            clearTimeout(fail);
                            chart.addSeriesAsDrilldown(e.point, {
                                name: e.point.name,
                                data: Banten_Data,
                                mapData: Highcharts.maps[mapKey],
                                joinBy: 'NAME2',
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.NAME2}'
                                }
                            });
                        });
                    }


                    this.setTitle(null, { text: e.point.name });
                },
                drillup: function () {
                    this.setTitle(null, { text: 'Indonesia' });
                }
            }
        },

        title : {
            text : 'Highcharts Map Drilldown'
        },

        subtitle: {
            text: 'Indonesia',
            floating: true,
            align: 'right',
            y: 50,
            style: {
                fontSize: '16px'
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#E6E7E8',
            maxColor: '#005645'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: '#EEDD66'
                    }
                }
            }
        },

        series : [{
            data : data,
            mapData : map_data,
            joinBy : 'hc-key',
            name: 'Indonesia',
            dataLabels: {
                enabled: true,
                format: '{point.properties.name}'
            }
        }],

        drilldown: {
            //series: drilldownSeries,
            activeDataLabelStyle: {
                color: '#FFFFFF',
                textDecoration: 'none',
                textShadow: '0 0 3px #000000'
            },
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 0,
                    y: 60
                }
            }
        }
    });
});