import React, {useCallback, useState} from 'react';

import {tableData, chartData, filterByDate} from './utils'
import agent from './agent';

import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Table from "./components/Table";
import DataFilter from "./components/DateFilter";

function App() {

    const data = agent.StatisticData()
    const [metricsValue, setMetricsValue] = useState('');
    const [dateRange, setDateRange] = useState({startDate: new Date("2019-01-01"), endDate: new Date("2021-01-01")});

    // const minAndMaxDateValue = minAndMaxValues(data, 'day')

    function getMetrics(metricsValue: any) {
         setMetricsValue(metricsValue)
    }

  const getDateRange =  useCallback((startDate:any, endDate:any) =>  {
        setDateRange({startDate,endDate})
    }, [setDateRange])

    const tableChartData = chartData(filterByDate(data,dateRange), metricsValue)
    const tableCustomizeData = tableData(filterByDate(data, dateRange))
console.log(filterByDate(data,dateRange), data,dateRange, 'ddddd')
    return (
        <Layout>
             <DataFilter getDateRange={getDateRange}/>
             <Charts data={tableChartData} getMetrics={getMetrics}/>
             <Table data={tableCustomizeData}/>
        </Layout>
  );
}

export default App;
