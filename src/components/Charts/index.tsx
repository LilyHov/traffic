import React, {useEffect, useState} from "react";
import Chart from "react-google-charts";
import metricsLabels from "../../constants/metricsLabels";
import "./styles.css";

type Props = {
    data: {} | any[] | undefined,
    getMetrics: Function,
}

function Charts({data, getMetrics}: Props) {

    const items = metricsLabels;
    const [selectedItem, setSelectedItem] = useState(items[0].value);

    const handleChangeType = (e: any) => {
        const value = e.target.value;
        selectedItem === value ? setSelectedItem(items[0].value) : setSelectedItem(value);
    }

    // state level up functionality for sending data up to parent
    useEffect(()=> {
        getMetrics(selectedItem)
    }, [getMetrics, selectedItem] )

    return (
        <>
            {/*chart view with configs*/}
            <Chart
                height='550px'
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={data}
            />
            {/*metrics view*/}
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
