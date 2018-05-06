import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col } from 'react-bootstrap/lib';
import ResultTable from './ResultTable';
import ResultChart from './ResultChart';
import UploadForm from './UploadForm';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={1}>
                        <UploadForm
                            onFileSelectedHandler={ this.props.onFileSelectedHandler }
                        />
                    </Col>
                    <Col md={5}>
                        <ResultTable tableData={ this.props.resultTableData }/>
                    </Col>
                    <Col md={6}>
                        <ResultChart
                            resultChartConfig={ this.props.resultChartConfig }
                            onUploadWindowCloseHandler={ this.onUploadWindowClose.bind(this) }
                            />
                    </Col>
                </Row>
            </Grid>
        )
    }

    onUploadWindowClose() {

    }
}

export default Home;
