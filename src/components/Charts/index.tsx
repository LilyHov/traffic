import React, {useState} from 'react';
import Chart from 'react-google-charts';
import dataLabels from "../../constants";
// @ts-ignore
function Charts({data}) {
    const items = dataLabels;
    const [selectedItem, setSelectedItem] = useState(items[0].value);

    const handleChangeType = (e: any) => {
        const value = e.target.value;
        selectedItem === value ? setSelectedItem(items[0].value) : setSelectedItem(value);
    }

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
                <select className={`dropdown-body`}  onChange={handleChangeType}>
                    {items.map(item => (
                        <option className="dropdown-item"  value={item.value}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default Charts;
