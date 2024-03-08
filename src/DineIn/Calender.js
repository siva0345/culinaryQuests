import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      const formattedDate = date.toISOString().split('T')[0];
      setSelectedDate(date);
      onDateChange(formattedDate);
    };
  
    return (
      <DatePicker
        placeholderText='dd/mm/yyyy'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // Set minDate to the current date to disable previous dates
      />
    );
  };
  
  export default CalendarComponent;