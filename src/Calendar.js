import React, { Component } from 'react';
import CalendarData from './CalendarData.js';

const CalendarHeader = (props) => {
  return (
    <header className="CalendarHeader">
      <h1 className="CalendarHeading">{props.title}</h1>
    </header>
  );
}

const CalendarWeek = () => {
  return (
    <ul className="CalendarWeek">
      <li>Sunday</li>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
      <li>Thursday</li>
      <li>Friday</li>
      <li>Saturday</li>
    </ul>
  );
}

const CalendarBody = (props) => {
  const calendarDates = props.dates;
  const calendarItems = [];
  const firstMonth = Number( calendarDates[0].split('-')[1] );
  for (let i = 0; i < 28; i++) {
    const dateString = calendarDates[i];
    const dateNumber = Number( dateString.split('-')[2] );
    const dateMonth  = Number( dateString.split('-')[1] );
    const monthClass = (firstMonth === dateMonth) ? 'first-month' : 'second-month';
    const todayClass = (props.today === dateString) ? 'today' : '';
    const classNames = [monthClass, todayClass].join(' ');
    calendarItems.push(<li key={dateString} id={dateString} className={classNames}>{ dateNumber }</li>);
  }
  return (
    <ul className="CalendarBody">{calendarItems}</ul>
  );
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    const cd = new CalendarData(props.date);
    this.state = cd.data;
  }
  render() {
    return (
      <main className="Calendar">
        <CalendarHeader title={this.state.months} />
        <CalendarWeek />
        <CalendarBody dates={this.state.dates} today={this.state.today} />
      </main>
    );
  }
}

export default Calendar;
