import React, { useState } from 'react';
import TimePicker from "@ashwinthomas/react-time-picker-dropdown";

const CustomTimePicker = ({ defaultValue, onChange }) => {
    return (
      <TimePicker
      value={defaultValue} // Use 'value' instead of 'defaultValue'
      placeholder="hh:mm:ss a"
      useTwelveHourFormat={true}
      showClockIcon={true}
      showCloseIcon={true}
      allowBackdrop={true}
      onChange={(newTime) => onChange(newTime)}
      />
    );
  };
  
  export default CustomTimePicker;
  