import React from "react";
import Chart from "react-google-charts";
import "./styles.css";

type Props = {
    data: {} | any[] | undefined
}

function Table({data}: Props) {
    return (
        <div className="table-wrapper">
            <Chart
                chartType="Table"
                loader={<div>Loading Chart</div>}
                data={data}
                formatters={[
                    {
                        type: 'DateFormat',
                        column: 0,
                        options: {
                            formatType: 'long',
                        },
                    },
                ]}
                options={
                    {
                        page: 'enable',
                        pageSize: 25,
                        pagingSymbols: {
                            prev: 'Prev',
                            next: 'Next'
                        },
                        pagingButtonsConfiguration: 'auto'
                    }
                }
                />
        </div>
    );
}

export default Table;
