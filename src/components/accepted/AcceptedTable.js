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

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const data = [
    {
        Image: "Image 1",
        Type: "Stop sign",
        Confidence: "91",
        UploadedOn: (new Date()).toLocaleString('en-US', options),
    },
    {
        Image: "Image 2",
        Type: "Speed limit",
        Confidence: "8",
        UploadedOn: (new Date()).toLocaleString('en-US', options),
    },
    {
        Image: "Image 3",
        Type: "Yield",
        Confidence: "1",
        UploadedOn: (new Date()).toLocaleString('en-US', options),
    },
];

class ResultTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    
    render() {
        return (
            <div>
                <ReactTable
                    data = { data }
                    columns = {[
                        {
                            Header: "Image",
                            accessor: "Image",
                            Cell: row => (
                                <img src={"./images/stop_sign.png"} alt={"result 1"} height={"40"} width={"40"}/>
                            ),
                        },
                        {
                            Header: "Type",
                            accessor: "Type",
                        },
                        {
                            Header: "Confidence",
                            accessor: "Confidence",
                        },
                        {
                            Header: "Uploaded on",
                            accessor: "UploadedOn",
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
