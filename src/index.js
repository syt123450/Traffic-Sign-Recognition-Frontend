import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(React.createElement(ReactHighcharts, { config: config }), document.getElementById('test'));
registerServiceWorker();
