import tableLabels from "../constants/tableLabels";

// max and min date for start and end range
export const minAndMaxDateValues = (data:any) => {
    const temp: any[] = []
    // collect date data
    data.forEach((item: any) => {
      temp.push(new Date(item.day))
    })

    const maxDate = new Date(Math.max(...temp));
    const minDate = new Date(Math.min(...temp));

    return {maxDate, minDate}
}

// filter for date range
export const filterByDate = (data: any[], dateRange: { startDate: any; endDate: any; }) => {
    const startDate= dateRange.startDate.toISOString().split('T')[0] || ''
    const endDate = dateRange.endDate.toISOString().split('T')[0] || ''
    return data.filter((a) => {
        return (a.day >= startDate && a.day <= endDate);
    })
}

//correcting data scheme for google-chart package
export const tableData = (data: any[]) => {
    let temp = [];
    const labels = tableLabels
    temp.push(labels);

    data.forEach((item) => temp.push([new Date(item.day).toISOString()
        .split('T')[0], item.clicks, item.impressions, item.ctr, item.ecpa,
        item.ecpm, item.lead_price, item.leads, item.net_potential, item.net_revenue]));
    return temp
}

//correcting data scheme for google-chart package with metrics filter
export const chartData = (data: { [x: string]: any; day: any; }[], metrics: string) => {
    let temp = []
    // for multiselected metrics add label names
    temp.push(['Data', ''])
    data.forEach((item) => {
        temp.push([new Date(item.day).toISOString().split('T')[0], item[metrics]])
    })
    return temp
}