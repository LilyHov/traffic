import React, {useCallback, useEffect, useMemo, useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
// @ts-ignore
function DataFilter({getDateRange}) {
    const [startDate, setStartDate] = useState(new Date("2019-01-01"));
    const [endDate, setEndDate] = useState(new Date("2021-02-01"));

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
                onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => date && setStartDate(date)}
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
                onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => date && setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
            </div>
        </div>
    );
}

export default React.memo(DataFilter);
