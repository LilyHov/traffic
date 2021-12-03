import React from 'react';
import Chart from 'react-google-charts';
import './styles.css';
// @ts-ignore
function Table({data}) {
    return (
        <div className="table-wrapper">
            <Chart
                chartType="Table"
                loader={<div>Loading Chart</div>}
                data={data}
                options={
                    {
                        page: 'enable',
                        pageSize: 25,
                        // pagingSymbols: {
                        //     prev: 'prev',
                        //     next: 'next'
                        // },
                        pagingButtonsConfiguration: 'auto'
                    }
                }
                />
        </div>
    );
}

export default Table;
