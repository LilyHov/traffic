import React, {useEffect, useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
// @ts-ignore
function DataFilter({getDateRange, minDate, maxDate}) {
    const [startDate, setStartDate] = useState(minDate);
    const [endDate, setEndDate] = useState(maxDate);

    useEffect(() => {
        getDateRange(startDate,endDate)
    }, [startDate,endDate,getDateRange])

    return (
        <div className='test'>
            <div className="date-picker">
                <p>Month from</p>
            <DatePicker
                selected={startDate}
                dateFormat="MM-yyyy"
                onChange={(date: Date | null) => date && setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            </div>
            <div className="date-picker">
            <p>Month to</p>
            <DatePicker
                selected={endDate}
                dateFormat="MM-yyyy"
                onChange={(date: Date | null) => date && setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
            </div>
        </div>
    );
}

export default DataFilter;
