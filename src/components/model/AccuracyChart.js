import React, {Component} from 'react';
import axios from 'axios'
import ReactHighcharts from 'react-highcharts';
import MockData from './MockData';

class AccuracyChart extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            config: MockData.config,
            timeout: null
        };
        this.updateConfig = this.updateConfig.bind(this);
    }
    
    updateConfig(config) {
        console.log('Update model');
        this.setState({
            config: config
        });
    }
    
    componentDidMount() {
        this.state.timeout = setTimeout(this.updateConfig.bind(this, MockData.newConfig), 2000);
    }
    
    componentWillUnmount() {
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
            this.state.timeout = null;
        }
    }
    
    render () {
        return (
            <div>
                <ReactHighcharts config={ this.state.config }/>
            </div>
        );
    }
};

export default AccuracyChart;