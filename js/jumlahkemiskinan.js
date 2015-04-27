$(function () {
    $('#linekemiskinan').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Jumlah Penduduk Miskin 1998-2013'
        },
        subtitle: {
            text: 'Source: www.bps.go.id'
        },
        xAxis: {
            categories: ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Juta orang'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' juta'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Kota',
            data: [17.6, 15.64, 12.31, 8.6, 13.32, 12.26, 11.37, 12.4, 14.49, 13.56, 12.77, 11.91, 11.1, 10.95, 10.51, 10.63]
        }, {
            name: 'Desa',
            data: [31.9, 32.33, 26.43, 29.27, 25.08, 25.08, 24.78, 22.7, 24.81, 23.61, 22.19, 20.62, 19.93, 18.94, 18.09, 17.92]
        }]
    });
});