import React from 'react';
import {Calendar} from 'react-native-calendars';

export default function MyCalender() {
  return (
    <Calendar
      theme={{
        arrowColor: 'orange',
        todayTextColor: 'orange',
      }}
    />
  );
}
