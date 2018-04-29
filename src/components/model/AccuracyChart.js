import React, {Component} from 'react';
import axios from 'axios'

const ReactHighcharts = require('react-highcharts');

const config = {
    chart: {
        type: 'column',
        zoomType: 'x'
    },
    xAxis: {
        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        title: {
            text: 'Timestamp/Sample ID'
        },
        tickPixelInterval: 1
    },
    yAxis: {
        min: 85.0,
        title: {
            text: 'Accuracy (%)'
        }
    },
    series: [{
        data: [91.5, 90.5, 92.5, 89.5, 92.5, 90.5, 91.5, 93.5, 92.5, 91.5],
        // pointWidth: 10,
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4', '#6AF9C4'],
        colorByPoint: true,
    }],
    title: {
        text: 'Accuracy over Time'
    }
};

const newConfig = {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: [0, 1, 2]
    },
    series: [{
        type: 'column',
        name: 0,
        data: [3, 2, 1, 3, 4]
    }, {
        type: 'column',
        name: 1,
        data: [2, 3, 5, 7, 6]
    }, {
        type: 'column',
        name: 2,
        data: [4, 3, 3, 9, 0]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: 'blue',
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13
        }, {
            name: 'John',
            y: 23
        }, {
            name: 'Joe',
            y: 19
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
};


class AccuracyChart extends React.Component {
    constructor(props) {
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);
    }
    
    handleRefresh(e) {
        e.preventDefault();
        axios.post('/user', {
                firstName: 'Fred',
                lastName: 'Flintstone'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render () {
        return (
            <div>
                <ReactHighcharts config={newConfig}/>
            </div>
        );
    }
};

export default AccuracyChart;