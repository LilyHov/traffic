import React, {useState} from 'react';

import {tableData, chartData, filterByDate} from './utils'
import agent from './agent';

import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Table from "./components/Table";
import DataFilter from "./components/DateFilter";

function App() {

    const data = agent.StatisticData()
    const [metricsValue, setMetricsValue] = useState('');
    const [dateRange, setDateRange] = useState('');

    function getMetrics(metricsValue: any) {
         setMetricsValue(metricsValue)
    }

    function getDateRange(dateRange: any) {
            setDateRange(dateRange)
    }

    const tableChartData =  chartData(data, metricsValue)
    const tableCustomizeData = tableData(data)

    return (
        <Layout>
             <DataFilter getDateRange={getDateRange}/>
             <Charts data={tableChartData} getMetrics={getMetrics}/>
             <Table data={tableCustomizeData}/>
        </Layout>
  );
}

export default App;
