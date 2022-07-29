import React from 'react';
import PropTypes from 'prop-types';
import { add, format } from 'date-fns';

const TitleWeek = ()=>{
  const titles=['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  return titles.map((t,i)=><span key={i}>{t}</span>)
}

const Day = (props) => {
  const {currentDate, setDate} = props;
  const addToDate = (duration)=>{
    const newDate = add(currentDate, duration);
    setDate(newDate);
  }
  return (
    <div>
      <p>{format(currentDate, "EEEE, d LLLL, yyyy 'year'")}</p>
      <p>
        <button onClick={()=>addToDate({days: 1})}>Add 1 day</button>
        <button onClick={()=>addToDate({months: 1})}>Add 1 month</button>
        <button onClick={()=>addToDate({years: 1})}>Add 1 year</button>
      </p>
      <section>
      <TitleWeek />
      </section>
    </div>
  );
}
// Friday, 29 July, 2022 year

Day.defaultProps = {
  currentDate: new Date()
};
Day.propTypes = {
  currentDate: PropTypes.object.isRequired
}

export default Day;
