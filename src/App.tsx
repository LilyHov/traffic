import React from 'react';

import {tableData, chartData} from './utils'
import agent from './agent';

import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Table from "./components/Table";

function App() {
    // @ts-ignore

    const metric = 'leads'
    const tableChartData = chartData(agent.StatisticData(), metric)
    const tableCustomizeData = tableData(agent.StatisticData())

    return (
    <Layout>
     <Charts data={tableChartData}/>
     <Table data={tableCustomizeData}/>
    </Layout>
  );
}

export default App;
