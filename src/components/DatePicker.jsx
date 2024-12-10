import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selectedDate, onChange }) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onChange}
      className="form-control"
    />
  );
};

export default DatePicker;
