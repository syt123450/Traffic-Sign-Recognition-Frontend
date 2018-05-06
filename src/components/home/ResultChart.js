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
        console.log('===== result char constructor');
        super(props);
        // this.state = {
        //     config:
        // };
    }

    render() {
        return (
            <ReactHighcharts config={ this.props.chartConfig } />
        )
    }
}

export default ResultChart
