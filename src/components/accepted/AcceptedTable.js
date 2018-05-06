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
import { Button, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import MockData from './MockData';
import Constants from '../constants/Constants';

class ResultTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: MockData.data,
            timeout: null
        };

        this.updateTableData = this.updateTableData.bind(this);
        this.onClickRefresh = this.onClickRefresh.bind(this);
    }

    componentDidMount() {
        this.fetchDataAndUpdateTable();
    }

    componentWillUnmount() {
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
            this.state.timeout = null;

        }
    }

    onClickRefresh() {
        this.fetchDataAndUpdateTable();
    }

    fetchDataAndUpdateTable() {
        axios({
                url: 'http://localhost:8080/v0/record',
                method: 'get'
            })
            .then(response => {
                this.updateTableData(response.data.records);
            })
            .catch(error => {
                console.log('error ======', error);
            });
    }

    updateTableData(newData) {
        console.log('Update accepted table');
        console.log('accepted images ======', newData);
        this.setState({
            data: newData
        })
    }

    render() {
        return (

            <div>
                <div>
                    <ReactTable
                        data = { this.state.data }
                        columns = {[
                            {
                                Header: "Image",
                                accessor: "imageURL",
                                Cell: row => (
                                    <img src={ 'http://' + row.value } alt={"result 1"} height={"40"} width={"40"}/>
                                ),
                            },
                            {
                                Header: "Type",
                                accessor: "classname",
                                Cell: row => (
                                    <div>{ Constants.imageLabels[row.value] }</div>
                                ),
                            },
                            {
                                Header: "Accuracy %",
                                accessor: "accuracy",
                                Cell: row => (
                                    <div>{ (row.value * 100).toString() }</div>
                                ),
                            },
                            {
                                Header: "Uploaded on",
                                accessor: "time",
                            },
                            // {
                            //     Header: "Acceptedd",
                            //     accessor: "time",
                            //     Cell: row => {
                            //         <div>{ 'false' }</div>
                            //     }
                            // },
                        ]}
                        className="-striped -highlight"
                        defaultPageSize={10}
                    />
                    <Tips />
                </div>
                <div>
                    <Button onClick={ this.onClickRefresh }>
                        <Glyphicon glyph={"refresh"}/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default ResultTable;
