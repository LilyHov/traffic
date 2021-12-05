import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

type Props = {
    getDateRange: (arg0: Date, arg1: Date) => void,
    minDate: Date,
    maxDate: Date
}

function DataFilter({getDateRange, minDate, maxDate}: Props) {

    const [startDate, setStartDate] = useState(minDate);
    const [endDate, setEndDate] = useState(maxDate);

    // state level up functionality for sending data up to parent
    useEffect(() => {
        getDateRange(startDate,endDate)
    }, [startDate,endDate,getDateRange])

    return (
        <div className='date-picker-wrapper'>
            <div className="date-picker">
                <p>Month from</p>
            <DatePicker
                selected={startDate}
                dateFormat="dd-MM-yyyy"
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
                dateFormat="dd-MM-yyyy"
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
