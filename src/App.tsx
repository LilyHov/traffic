import React, {useCallback, useState} from "react";

import {tableData, chartData, filterByDate, minAndMaxDateValues} from "./utils";
import agent from "./agent";

import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Table from "./components/Table";
import DataFilter from "./components/DateFilter";

export interface IDateRange {
    startDate: Date,
    endDate: Date
}

function App() {

    // get data
    const data = agent.StatisticData() || null

    // get min and max date value for setting default range values
    const maxDate = minAndMaxDateValues(data).maxDate
    const minDate = minAndMaxDateValues(data).minDate

    const [metricsValue, setMetricsValue] = useState('');
    const [dateRange, setDateRange] = useState<IDateRange>({startDate: minDate, endDate: maxDate});

    // getting metric dropdown value from child via level up state functionality
    const getMetrics = useCallback( (metricsValue: any) => {
         setMetricsValue(metricsValue)
    },[setMetricsValue])

    // getting date range values from child via level up state functionality
    const getDateRange =  useCallback((startDate:any, endDate:any) =>  {
        setDateRange({startDate,endDate})
    }, [setDateRange])

    // filter and set data for chart and table
    const tableChartData = chartData(filterByDate(data,dateRange), metricsValue)
    const tableCustomizeData = tableData(filterByDate(data, dateRange))

    return (
        <Layout headerText={'Data Visualisation and Analytics'} pageTitle={'Analytics'}>
             <DataFilter getDateRange={getDateRange} minDate={minDate} maxDate={maxDate}/>
             <Charts data={tableChartData} getMetrics={getMetrics}/>
             <Table data={tableCustomizeData}/>
        </Layout>
  );
}

export default App;
