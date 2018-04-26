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

const data = [
    {
        Image: "Image 1",
        Type: "Stop sign",
        Confidence: "91"
    },
    {
        Image: "Image 2",
        Type: "Speed limit",
        Confidence: "8"
    },
    {
        Image: "Image 3",
        Type: "Yield",
        Confidence: "1"
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
                            )
                        },
                        {
                            Header: "Type",
                            accessor: "Type"
                        },
                        {
                            Header: "Confidence",
                            accessor: "Confidence"
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
