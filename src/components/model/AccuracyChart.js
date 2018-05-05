import React, {Component} from 'react';
import axios from 'axios'
import ReactHighcharts from 'react-highcharts';
import { Button, Glyphicon } from 'react-bootstrap';
import MockData from './MockData';

class AccuracyChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            last5EpochsConfig: MockData.last5EpochsConfig,
            modelHistoryConfig: MockData.modelHistoryConfig,
            timeout: null
        };
        this.updateConfig = this.updateConfig.bind(this);
        this.onClickRefresh = this.onClickRefresh.bind(this);
    }

    updateConfig(config) {
        console.log('Update model');
        this.setState({
            config: config
        });
    }

    componentDidMount() {
        // this.state.timeout = setTimeout(this.updateConfig.bind(this, MockData.newConfig), 2000);
    }

    componentWillUnmount() {
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
            this.state.timeout = null;
        }
    }

    onClickRefresh() {
        this.fetchDataAndUpdateChart();
    }

    fetchDataAndUpdateChart() {
        axios({
                url: 'http://localhost:8080/v0/graphic',
                method: 'get'
            })
            .then(response => {
                // Update chart for last 5 epochs
                MockData.last5EpochsConfig.series = response.data.comboDataBean.classesPrecises.map((epochData, index) => {
                    return {
                        type: 'column',
                        name: 'epoch ' + index,
                        data: Object.values(epochData).slice(1),
                    };
                });

                MockData.last5EpochsConfig.series.push(
                    {
                        type: 'spline',
                        name: 'Average',
                        data: response.data.comboDataBean.classesPrecises.averages,
                        marker:
                            {
                                lineWidth: 2,
                                lineColor: 'blue',
                                fillColor: 'white'
                            }
                    }
                );

                // update chart of model history
                MockData.modelHistoryConfig.series[0] = {
                    data: response.data.lineDataBean.averagePrecises.map(epochData => {
                        return epochData['precise'];
                    }),
                };

                console.log('modelHistoryConfig ======', MockData.modelHistoryConfig);

                this.setState({
                    last5EpochsConfig: MockData.last5EpochsConfig,
                    modelHistoryConfig: MockData.modelHistoryConfig,
                });
            })
            .catch(error => {
                console.log('error ======', error);
            });
    }

    render () {
        return (
            <div>
                <div>
                    <Button onClick={ this.onClickRefresh }>
                        <Glyphicon glyph={"refresh"}/>
                    </Button>
                </div>
                <div>
                    <ReactHighcharts config={ this.state.last5EpochsConfig }/>
                </div>
                <div>
                    <ReactHighcharts config={ this.state.modelHistoryConfig }/>
                </div>

            </div>

        );
    }
};

export default AccuracyChart;
