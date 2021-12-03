
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
        item:any}) => temp.push([item.day, item.clicks, item.impressions, item.ctr, item.ecpa,
        item.ecpm, item.lead_price, item.leads, item.net_potential, item.net_revenue]));
    return temp

}

export const filterByDate = (data:any) => {

}

export const chartData = (data:any, metrics:any) => {
    let temp = []
    temp.push(['Data', ''])
    data.forEach((item: { [x: string]: any; day: any; }) => {
        temp.push([item.day, item[metrics]])
    })
    return temp
}