$(document).ready(function () {

	$(function () {

	var cdhleads = new Highcharts.Chart({
            chart: {
                renderTo: 'CDHLeads',
                type: 'line'

            },
            plotOptions: {
                series: {
                    cursor: 'pointer'

                },

            },
            title: {
                text: 'DB Leads',
                x: -20 //center
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {

                categories: ['test1', 'test2', 'test3', 'test4']
            },
            yAxis: {
                min: 0,
                max: 30,
                tickInterval: 20,
                title: {
                    text: 'Applications'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'test1',
                data: [1,2,3,5]
            }, {
                name: 'test2',
                data: [6,3,9,7]
            }, {
                name: 'test2',
                data: [10,2,3,8]
            },  {
                name: 'test2',
                data: [1,1,2,8]
            }]
        });
    });

    $("#chartType").change(function() {
        var type = this.value;
        if(type !== '0') {
        	if (type == 'drilldown')
	            var cdh = $('#CDHLeads').highcharts({
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
			else if (type == 'map') {
				var cdh = $('#CDHLeads').highcharts('Map', {
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
			            data : [{
					            "hc-key": "id-3700",
					            "value": 0,
					            "nilai": '100'
					        },
					        {
					            "hc-key": "id-ac",
					            "value": Math.round(1741447/4494410*100),
					            "nilai": '1.741.447'
					        },
					        {
					            "hc-key": "id-ki",
					            "value": Math.round(726040/3553143*100),
					            "nilai": '726.040'
					        },
					        {
					            "hc-key": "id-jt",
					            "value": Math.round(12310674/32382657*100),
					            "nilai": '12.310.674'
					        },
					        {
					            "hc-key": "id-be",
					            "value": Math.round(552490/1715518*100),
					            "nilai": '552.490'
					        },
					        {
					            "hc-key": "id-bt",
					            "value": Math.round(2815193/10632166*100),
					            "nilai": '2.815.193'
					        },
					        {
					            "hc-key": "id-kb",
					            "value": Math.round(1180901/4395983*100),
					            "nilai": '1.180.901'
					        },
					        {
					            "hc-key": "id-bb",
					            "value": Math.round(185658/1223296*100),
					            "nilai": '185.658'
					        },
					        {
					            "hc-key": "id-ba",
					            "value": Math.round(841230/3890757*100),
					            "nilai": '841.230'
					        },
					        {
					            "hc-key": "id-ji",
					            "value": Math.round(12634688/37476757*100),
					            "nilai": '12.634.688'
					        },
					        {
					            "hc-key": "id-ks",
					            "value": Math.round(693732/3626616*100),
					            "nilai": '693.732'
					        },
					        {
					            "hc-key": "id-nt",
					            "value": Math.round(2241752/4683827*100),
					            "nilai": '2.241.752'
					        },
					        {
					            "hc-key": "id-se",
					            "value": Math.round(2412141/8034776*100),
					            "nilai": '2.412.141'
					        },
					        {
					            "hc-key": "id-kr",
					            "value": Math.round(307675/1679163*100),
					            "nilai": '307.675'
					        },
					        {
					            "hc-key": "id-ib",
					            "value": Math.round(423524/760422*100),
					            "nilai": '423.524'
					        },
					        {
					            "hc-key": "id-su",
					            "value": Math.round(3845401/12982204*100),
					            "nilai": '3.845.401'
					        },
					        {
					            "hc-key": "id-ri",
					            "value": Math.round(1169865/5538367*100),
					            "nilai": '1.169.865'
					        },
					        {
					            "hc-key": "id-sw",
					            "value": Math.round(742541/2270596*100),
					            "nilai": '742.541'
					        },
					        {
					            "hc-key": "id-la",
					            "value": Math.round(314059/1038087*100),
					            "nilai": '314.059'
					        },
					        {
					            "hc-key": "id-sb",
					            "value": Math.round(1381873/4846909*100),
					            "nilai": '1.381.873'
					        },
					        {
					            "hc-key": "id-ma",
					            "value": Math.round(680897/1533506*100),
					            "nilai": '680.897'
					        },
					        {
					            "hc-key": "id-nb",
					            "value": Math.round(1944090/4500212*100),
					            "nilai": '1.944.090'
					        },
					        {
					            "hc-key": "id-sg",
					            "value": Math.round(840952/2232586*100),
					            "nilai": '840952'
					        },
					        {
					            "hc-key": "id-st",
					            "value": Math.round(997106/2635009*100),
					            "nilai": '997.106'
					        },
					        {
					            "hc-key": "id-pa",
					            "value": Math.round(1937595/2833381*100),
					            "nilai": '1.937.595'
					        },
					        {
					            "hc-key": "id-1024",
					            "value": Math.round(2677037/7608405*100),
					            "nilai": '2.677.037'
					        },
					        {
					            "hc-key": "id-jk",
					            "value": Math.round(1211629/9607787*100),
					            "nilai": '1.211.629'
					        },
					        {
					            "hc-key": "id-jr",
					            "value": Math.round(13241840/43053732*100),
					            "nilai": '13.241.840'
					        },
					        {
					            "hc-key": "id-go",
					            "value": Math.round(438832/1040164*100),
					            "nilai": '438.832'
					        },
					        {
					            "hc-key": "id-yo",
					            "value": Math.round(1317139/3457491*100),
					            "nilai": '1.317.139'
					        },
					        {
					            "hc-key": "id-kt",
					            "value": Math.round(388711/2212089*100),
					            "nilai": '388.711'

					        },
					        {
					            "hc-key": "id-sl",
					            "value": Math.round(2412141/7450394*100),
					            "nilai": '2.412.141'
					        },
					        {
					            "hc-key": "id-sr",
					            "value": Math.round(412369/1158651*100),
					            "nilai": '412.369'
					        },
					        {
					            "hc-key": "id-ja",
					            "value": Math.round(769322/3092265*100),
					            "nilai": '769.322'

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
			                enabled: true,
			                format: '{point.name}'
			            }
			        }]
			    });
			}
            
            cdh.redraw();
        }
    });
});