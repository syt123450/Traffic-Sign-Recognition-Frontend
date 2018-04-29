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

const results = [
    {
        image: "Image 1",
        type: "Stop sign",
        confidence: "91",
        image_url: "./images/stop_sign.png",
    },
    {
        image: "Image 2",
        type: "Speed limit",
        confidence: "8",
        image_url: "./images/stop_sign.png",
    },
    {
        image: "Image 3",
        type: "Yield",
        confidence: "1",
        image_url: "./images/stop_sign.png",
    },
];

const newResults = [
    {
        image: "Image 1",
        type: "Stop sign === ",
        confidence: "91"
    },
    {
        image: "Image 2",
        type: "Speed limit",
        confidence: "8"
    },
    {
        image: "Image 3",
        type: "Yield",
        confidence: "1"
    },
];

class ResultTable extends React.Component {
    constructor() {
        super();
        this.state = {
            results: results,
        };
        
        this.updateResults = this.updateResults.bind(this);
        setTimeout(this.updateResults, 2000);
    }
    
    /**
     * Update results of home tab
     * @param results
     */
    updateResults() {
        this.setState({
            results: newResults
        })
    }
    
    render() {
        return (
            <div>
                <ReactTable
                    data = { this.state.results }
                    columns = {[
                        {
                            Header: "Image",
                            accessor: "image",
                            Cell: row => (
                                <img src={"./images/stop_sign.png"} alt={"result 1"} height={"40"} width={"40"}/>
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
