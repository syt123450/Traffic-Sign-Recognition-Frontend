import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Home from './home/Home';
import AcceptedTable from './accepted/AcceptedTable';
import AccuracyChart from './model/AccuracyChart';
import "../styles/common.css";
import MockData from './home/MockData';
import Constants from './constants/Constants';
import axios from 'axios';

class MyTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            resultChartConfig: MockData.resultChartConfig,
            resultTableData: MockData.resultTableData,
        };

        this.onFileSelectedHandler = this.onFileSelectedHandler.bind(this);
    }

    uploadImageHandler () {

    }

    onFileSelectedHandler(event) {
        console.log('Image selected, waiting for results...');
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        axios({
            url: 'http://localhost:8080/v0/upload',
            method: 'post',
            data: formData,
            headers: {
                dataType: 'text',
                enctype: 'multipart/form-data',
                contentType: false,
                processData: false,
            }})
            .then(response => {
                console.log('Image classification results ====', response.data.results);
                this.setState({
                    resultTableData: response.data.results,
                    resultChartConfig: this.getNewResultChartConfig(response.data.results),
                })
            })
            .catch(error => {
                console.log('Fail to upload data', error);
            });
    }

    getNewResultChartConfig(results) {
        let newData = results.map(result => ({
            name: Constants.imageLabels[result.classID],
            y: result.accuracy * 100
        }));
        MockData.resultChartConfig.series[0].data = newData;
        return MockData.resultChartConfig;
    }

    render() {
        return (
            <Tabs className={"body-container"}>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Accepted</Tab>
                    <Tab>Model</Tab>
                </TabList>

                <TabPanel>
                    <Home
                        resultChartConfig = { this.state.resultChartConfig }
                        resultTableData = { this.state.resultTableData }
                        onFileSelectedHandler = { this.onFileSelectedHandler }
                    />
                </TabPanel>

                <TabPanel>
                    <AcceptedTable />
                </TabPanel>

                <TabPanel>
                    <AccuracyChart />
                </TabPanel>
            </Tabs>
        )
    }
}

export default MyTabs;
