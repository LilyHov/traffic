import React, {useEffect, useState} from 'react';
import Chart from 'react-google-charts';
import dataLabels from "../../constants";
import './styles.css'
// @ts-ignore
function Charts({data, getMetrics}) {
    const items = dataLabels;
    const [selectedItem, setSelectedItem] = useState(items[0].value);

    const handleChangeType = (e: any) => {
        const value = e.target.value;
        selectedItem === value ? setSelectedItem(items[0].value) : setSelectedItem(value);
    }
    useEffect(()=> {
        getMetrics(selectedItem)
    } )

    return (
        <>
            <Chart
                height='550px'
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={data}
                // controls={[
                //     {
                //         controlType: 'DateRangeFilter',
                //         options: {
                //             filterColumnLabel: 'Date',
                //             ui: {format: {pattern: 'yyyy mm'}},
                //         },
                //     }
                // ]}
            />
            <div className='dropdown'>
                <p>Chart metric</p>
                <select className='dropdown-body' onChange={handleChangeType}>
                    {items.map((item, key) => (
                        <option className="dropdown-item" value={item.value} key={key}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default Charts;
