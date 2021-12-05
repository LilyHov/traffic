import React, {useCallback, useState} from 'react';

import {tableData, chartData, filterByDate, minAndMaxDateValues} from './utils'
import agent from './agent';

import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Table from "./components/Table";
import DataFilter from "./components/DateFilter";

function App() {

    const data = agent.StatisticData() || null

    const maxDate = minAndMaxDateValues(data).maxDate
    const minDate = minAndMaxDateValues(data).minDate

    const [metricsValue, setMetricsValue] = useState('');
    const [dateRange, setDateRange] = useState({startDate: maxDate, endDate: minDate});

    function getMetrics(metricsValue: any) {
         setMetricsValue(metricsValue)
    }

    const getDateRange =  useCallback((startDate:any, endDate:any) =>  {
        setDateRange({startDate,endDate})
    }, [setDateRange])

    const tableChartData = chartData(filterByDate(data,dateRange), metricsValue)
    const tableCustomizeData = tableData(filterByDate(data, dateRange))

    return (
        <Layout>
             <DataFilter getDateRange={getDateRange} minDate={minDate} maxDate={maxDate}/>
             <Charts data={tableChartData} getMetrics={getMetrics}/>
             <Table data={tableCustomizeData}/>
        </Layout>
  );
}

export default App;
