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
import Constants from '../constants/Constants';

class ResultTable extends React.Component {
    constructor(props) {
        super(props);
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
        // this.state.timeout = setTimeout(this.updateResults.bind(this, MockData.resultTableNewResults), 2000);
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
                    data = { this.props.tableData }
                    columns = {[
                        {
                            Header: "Image",
                            accessor: "classID",
                            Cell: row => (
                                <img src={ 'images/' + row.value.toString().padStart(2, '0') + '.png' } alt={"result 1"} height={"40"} width={"40"}/>
                            )
                        },
                        {
                            Header: "Type",
                            accessor: "classID",
                            Cell: row => (
                                <div>{ Constants.imageLabels[row.value] }</div>
                            )
                        },
                        {
                            Header: "Accuracy %",
                            accessor: "accuracy",
                            Cell: row => (
                                <div>{ (row.value * 100).toFixed(2) }</div>
                            )
                        }
                    ]}
                    className="-striped -highlight"
                    defaultPageSize={10}
                />
            </div>
        );
    }
}

export default ResultTable
