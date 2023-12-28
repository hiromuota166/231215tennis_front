'use client';
import React from 'react';
import { Input } from '@chakra-ui/react';

function DateTimePicker({ onDateChange }) { // props名を変更

  const handleDateTimeChange = (event) => {
    const newDate = event.target.value;
    onDateChange(newDate); // onDateChange を呼び出し
  };

  return (
    <div>
      <Input
        placeholder="Select Date"
        size="md"
        type="date"
        onChange={handleDateTimeChange}
      />
    </div>
  );
}

export default DateTimePicker;
