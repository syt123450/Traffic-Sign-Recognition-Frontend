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
            data: MockData.data,
            timeout: null
        };

        this.updateData = this.updateData.bind(this);
    }

    updateData(newData) {
        console.log('Update accepted table');
        this.setState({
            data: newData
        })
    }
    
    componentDidMount() {
        this.state.timeout = setTimeout(this.updateData.bind(this, MockData.newData), 2000);
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
                    data = { this.state.data }
                    columns = {[
                        {
                            Header: "Image",
                            accessor: "image_url",
                            Cell: row => (
                                <img src={ row.value } alt={"result 1"} height={"40"} width={"40"}/>
                            ),
                        },
                        {
                            Header: "Type",
                            accessor: "type",
                        },
                        {
                            Header: "confidence",
                            accessor: "confidence",
                        },
                        {
                            Header: "Uploaded on",
                            accessor: "uploadedOn",
                        }
                    ]}
                    className="-striped -highlight"
                    defaultPageSize={10}
                />
                <Tips />
                <Logo />
            </div>
        );
    }
}

export default ResultTable
