import React, {useState} from 'react';

import {tableData, chartData} from './utils'
import agent from './agent';

import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Table from "./components/Table";

function App() {

    const [metricsValue, setMetricsValue] = useState('');

    function getMetrics(metricsValue: any) {
         setMetricsValue(metricsValue)
    }

    const tableChartData = chartData(agent.StatisticData(), metricsValue)
    const tableCustomizeData = tableData(agent.StatisticData())

    return (
    <Layout>
     <Charts data={tableChartData} getMetrics={getMetrics}/>
     <Table data={tableCustomizeData}/>
    </Layout>
  );
}

export default App;
