import React from 'react';

interface DayProps {
  date: string;
}

const Day = (props: DayProps): JSX.Element => {
  return (
    <div className="day--container">
      <div className="day--wrapper">
        <span className="day--span">{props.date}</span>
      </div>
    </div>
  );
};

export default Day;
