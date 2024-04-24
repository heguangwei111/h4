// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '月平均最高溫度'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">cwa.gov.tw</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: 
    [

    {
        name: '巴黎',
        marker: {
            symbol: 'square'
        },
        data: [2.5, 2.8, 5.1, 6.8, 10.5, 13.3, 15.5, 15.4, 12.5, 9.2, 5.3, 3.6]

    }, 

    {
        name: '曼谷',
        marker: {
            symbol: 'diamond'
        },
        data: [21, 23.3, 24.9, 26.1, 25.6, 25.4, 25, 24.9, 24.6, 24.3, 23.1, 20.8]
    }, 
    
    {
        name: '河内',
        marker: {
            symbol: 'circle'
        },
        data: [13.7,15,18.1,21.4,24.3,25.8,26.1,25.7,24.7,21.9,18.5,15.3]
    }

    ]
});