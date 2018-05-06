/**
 * Author: Bo
 * Created at: April 26, 2018
 */

import React, {Component} from 'react';
import axios from 'axios'
import ReactHighcharts from 'react-highcharts';
import MockData from './MockData';

class ResultChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactHighcharts config={ this.props.resultChartConfig } />
        )
    }
}

export default ResultChart
