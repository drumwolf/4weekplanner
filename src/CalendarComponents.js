import React, { Component } from 'react';

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

class CalendarBody extends Component {
  getDate(e) {
    const calendarDate = e.target.closest('.first-month') || e.target.closest('.second-month');
    this.props.onClick( calendarDate.getAttribute('id') );
  }
  render() {
    const calendarDates = this.props.dates;
    const calendarItems = [];
    const firstMonth = Number( calendarDates[0].split('-')[1] );
    for (let i = 0; i < 28; i++) {
      const dateString = calendarDates[i];
      const dateNumber = Number( dateString.split('-')[2] );
      const dateMonth  = Number( dateString.split('-')[1] );
      const monthClass = (firstMonth === dateMonth) ? 'first-month' : 'second-month';
      const todayClass = (this.props.today === dateString) ? 'today' : '';
      const classNames = [monthClass, todayClass].join(' ');
      const schedule = ( this.props.schedule[dateString] ) ? this.props.schedule[dateString].map( obj => <li key={obj}>{obj}</li>) : "";
      calendarItems.push(
        <li key={dateString} id={dateString} className={classNames} onClick={ this.getDate.bind(this)  }>
          <div className="CalendarDateNumber">{ dateNumber }</div>
          <ul className="CalendarDateSchedule">{ schedule }</ul>
        </li>
      );
    }
    return (
      <ul className="CalendarBody">{calendarItems}</ul>
    );
  }
}

export { CalendarHeader, CalendarWeek, CalendarBody }