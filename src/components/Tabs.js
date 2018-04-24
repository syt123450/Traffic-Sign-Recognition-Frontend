import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UploadForm from './UploadForm'
import AccuracyChart from './AccuracyChart';
import ResultList from './ResultList';
import ToolboxTest from './ToolboxTest';

export default () => (
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Results</Tab>
            <Tab>Accepted</Tab>
            <Tab>Model</Tab>
        </TabList>
        
        <TabPanel>
            <UploadForm />
            {/*<h2>Any content 2</h2>*/}
        </TabPanel>
        <TabPanel>
            {/*<ToolboxTest />*/}
            <ResultList/>
        </TabPanel>
        <TabPanel>
            <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
            <AccuracyChart />
        </TabPanel>
    </Tabs>
);