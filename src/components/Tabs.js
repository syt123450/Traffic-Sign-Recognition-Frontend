import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Home from './home/Home';
import AcceptedTable from './accepted/AcceptedTable';
import AccuracyChart from './model/AccuracyChart';
import "../styles/common.css";

export default () => (
    <Tabs className={"body-container"}>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Accepted</Tab>
            <Tab>Model</Tab>
        </TabList>
        
        <TabPanel>
            <Home />
        </TabPanel>
        
        <TabPanel>
            <AcceptedTable />
        </TabPanel>
        
        <TabPanel>
            <AccuracyChart />
        </TabPanel>
    </Tabs>
);