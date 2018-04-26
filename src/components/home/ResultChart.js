/**
 * Author: Bo
 * Created at: April 26, 2018
 */

import React, {Component} from 'react';
import axios from 'axios'
import ReactHighcharts from 'react-highcharts';

const config = {
    chart: {
        type: 'pie',
        marginTop: 0,
    },
    series: [{
        data: [
            {
                name: "Stop sign",
                y: 91,
            },
            {
                name: "Speed limit",
                y: 8,
            },
            {
                name: "Yield",
                y: 1,
            },
        ],
        colors: ['#058DC7', '#50B432', '#ED561B'],
        colorByPoint: true,
    }],
    title: {
        text: 'Confidence %',
        x: 100
    }
};

class ResultChart extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <ReactHighcharts config={ config } />
        )
    }
}

export default ResultChart
