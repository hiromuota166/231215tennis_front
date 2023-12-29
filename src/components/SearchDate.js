'use client';
import React from 'react';
import { Input } from '@chakra-ui/react';

function DateTimePicker({ onDateChange, date }) { // props名を変更

  const handleDateTimeChange = (event) => {
    onDateChange(event.target.value); // onDateChange を呼び出し
  };

  return (
    <div>
      <Input
        placeholder="Select Date"
        size="md"
        type="date"
        value={date} // 初期値
        onChange={handleDateTimeChange}
      />
    </div>
  );
}

export default DateTimePicker;
