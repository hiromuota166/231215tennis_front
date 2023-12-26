'use client';
import React from 'react';
import { Input } from '@chakra-ui/react';

function DateTimePicker({ setDateTime }) {

  const handleDateTimeChange = (event) => {
    const newDate = event.target.value;
    setDateTime(newDate);
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
