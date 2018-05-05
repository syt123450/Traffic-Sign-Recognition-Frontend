import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col } from 'react-bootstrap/lib';
import ResultTable from './ResultTable';
import ResultChart from './ResultChart';
import UploadForm from './UploadForm';
import axios from 'axios';
import MockData from './MockData';

class Home extends React.Component {
    constructor() {
        console.log('****** home constructor');
        super();
        this.state = {
            chartConfig: MockData.resultChartConfig,
            tableData: [],
        }
    }
    
    render () {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}>
                        <UploadForm
                            onFileSelectedHandler={this.onFileSelected.bind(this)}
                        />
                    </Col>
                    <Col md={6}>
                        <ResultTable tableData={this.state.tableData}/>
                    </Col>
                    <Col md={5}>
                        <ResultChart
                            chartConfig={this.state.chartConfig}
                            onUploadWindowCloseHandler={this.onUploadWindowClose.bind(this)}
                            />
                    </Col>
                </Row>
            </Grid>
        )
    }
    
    onFileSelected(event) {
        console.log('&&&&&');
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
                console.log('====', response.data.results);
                this.getNewChartConfig(response.data.results);
                
                this.setState({
                    tableData: response.data.results
                })
            })
            .catch(error => {
                console.log('Fail to upload data', error);
            });
    }
    
    onUploadWindowClose() {
    
    }
    
    getNewChartConfig(results) {
        let newData = results.map(result => ({
            name: result.classID,
            y: result.accuracy * 100
        }));
        MockData.resultChartConfig.series[0].data = newData;
    }
}

export default Home
