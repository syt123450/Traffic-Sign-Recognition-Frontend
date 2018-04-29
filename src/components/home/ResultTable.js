/**
 * Author: Bo
 * Created on: April 25, 2018
 * Ref: https://react-table.js.org/#/story/simple-table
 * Ref: https://github.com/react-tools/react-table
 */

import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "../Utils";
import ReactTable from "react-table";
import "react-table/react-table.css";
import MockData from './MockData';

class ResultTable extends React.Component {
    constructor() {
        super();
        this.state = {
            status: true,
            results: MockData.resultTableResults,
            timeout: null
        };
        
        this.updateResults = this.updateResults.bind(this);
    }
    
    /**
     * Update results of home tab
     * @param results
     */
    updateResults(results) {
        console.log('Update home result table');
        this.setState({
            results: results
        })
    }
    
    componentDidMount() {
        this.state.timeout = setTimeout(this.updateResults.bind(this, MockData.resultTableNewResults), 2000);
    }
    
    componentWillUnmount() {
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
            this.state.timeout = null;
        }
    }
    
    render() {
        return (
            <div>
                <ReactTable
                    data = { this.state.results }
                    columns = {[
                        {
                            Header: "Image",
                            accessor: "image_url",
                            Cell: row => (
                                <img src={ row.value } alt={"result 1"} height={"40"} width={"40"}/>
                            )
                        },
                        {
                            Header: "Type",
                            accessor: "type"
                        },
                        {
                            Header: "Confidence",
                            accessor: "confidence"
                        }
                    ]}
                    className="-striped -highlight"
                    defaultPageSize={3}
                />
                <Tips />
                <Logo />
            </div>
        );
    }
}

export default ResultTable
