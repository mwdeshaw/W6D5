import React from 'react';

const months = [
  'Jan', 'Feb', 'Mar', 
  'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sept', 
  'Oct', 'Nov', 'Dec'
];

const daysOfWeek = [
  'Sun', 'Mon',
  'Tues', 'Wed',
  'Thurs', 'Fri', 'Sat'
];

const Calendar = props => (
  <p className='calendar'>
    <span>Date: </span>
    <span>
      {daysOfWeek[props.date.getDay()]}
      &#160;
      {months[props.date.getMonth()]}
      &#160;
      {formatTime(props.date.getDate())}
      &#160;
      {props.date.getFullYear()}
    </span>
  </p>
);

const formatTime = num => ('0' + num).slice(-2);

export default Calendar;