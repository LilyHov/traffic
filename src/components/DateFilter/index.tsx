import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

type Props = {
    getDateRange: (arg0: any, arg1: any) => void,
    minDate: any,
    maxDate: any
}

function DataFilter({getDateRange, minDate, maxDate}: Props) {
    const [startDate, setStartDate] = useState(minDate);
    const [endDate, setEndDate] = useState(maxDate);

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
