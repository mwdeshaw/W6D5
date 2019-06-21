import React from 'react';

const Time = props => (
  <p className='time'>
    <span>Time: </span>
    <span>
      {formatTime(props.date.getHours())} 
      :
      {formatTime(props.date.getMinutes())} 
      :
      {formatTime(props.date.getSeconds())}
      <span><strong> PDT</strong></span>
  </span>
  </p>
);

const formatTime = num => ('0' + num).slice(-2);

export default Time;