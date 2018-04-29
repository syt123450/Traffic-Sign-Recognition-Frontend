import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col } from 'react-bootstrap/lib';
import ResultTable from './ResultTable';
import ResultChart from './ResultChart';
import UploadForm from './UploadForm';

class Home extends React.Component {
    constructor() {
        super();
    }
    
    render () {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}>
                        <UploadForm />
                    </Col>
                    <Col md={6}>
                        <ResultTable />
                    </Col>
                    <Col md={5}>
                        <ResultChart />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home
