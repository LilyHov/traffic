
// export const minAndMaxValues = (data:any, valuesBy:any) => {
//     const temp: number | any[][] = []
//
//   data.forEach((item:any) => {
//       temp.push([item[valuesBy]])
//   })
//  return Math.max(temp)
// }
//correcting data scheme for google-chart package
export const tableData = (data: {data:any
    forEach(param: (item: { item: any }) => any): void;
}) => {
    let temp = [];

    temp.push(["Date", "Clicks", "Impressions", "CTR", "ECPA", "ECPM", "Lead Price", "Leads", 'Net Potential', 'Net Revenue' ]);

    // @ts-ignore
    data.forEach((item: {
        clicks: any,
        amount: any,
        day: any,
        impressions: any,
        ctr: any,
        ecpa: any,
        ecpm:any,
        lead_price:any,
        leads: any,
        net_potential: any,
        net_revenue: any,
        item:any}) => temp.push([new Date(item.day).toISOString().split('T')[0], item.clicks, item.impressions, item.ctr, item.ecpa,
        item.ecpm, item.lead_price, item.leads, item.net_potential, item.net_revenue]));
    return temp

}

export const filterByDate = (data:any, dateRange:any) => {
    const startDate= dateRange.startDate.toISOString().split('T')[0] || ''
    const endDate = dateRange.endDate.toISOString().split('T')[0] || ''
       return data.filter((a: { day: number; }) => {
            return (a.day >= startDate && a.day <= endDate);
          })
}

//correcting data scheme for google-chart package with metrics filter
export const chartData = (data:any, metrics:any) => {
    let temp = []
    // for multiselected metrics add label names
    temp.push(['Data', ''])
    data.forEach((item: { [x: string]: any; day: any; }) => {
        temp.push([new Date(item.day).toISOString().split('T')[0], item[metrics]])
    })
    return temp
}