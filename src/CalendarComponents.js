import React, { Component } from 'react';

const CalendarHeader = (props) => {
  return (
    <header className="CalendarHeader">
      <button id="HeaderArrowLeft" className="CalendarHeaderArrow" onClick={ () => window.location.hash = props.prev }> &#171; </button>
      <h1 className="CalendarHeading">{props.title}</h1>
      <button id="HeaderArrowRight" className="CalendarHeaderArrow" onClick={ () => window.location.hash = props.next }> &#187; </button>
    </header>
  );
}

const CalendarWeek = () => {
  return (
    <ul className="CalendarWeek">
      <li><code>Sun<span className="desktop">day</span></code></li>
      <li><code>Mon<span className="desktop">day</span></code></li>
      <li><code>Tue<span className="desktop">sday</span></code></li>
      <li><code>Wed<span className="desktop">nesday</span></code></li>
      <li><code>Thu<span className="desktop">rsday</span></code></li>
      <li><code>Fri<span className="desktop">day</span></code></li>
      <li><code>Sat<span className="desktop">urday</span></code></li>
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
      const classNames = ['CalendarDate', monthClass, todayClass].join(' ');
      const schedule   = ( this.props.schedule[dateString] ) ? this.props.schedule[dateString].map( obj => <li key={obj}>{obj}</li>) : "";
      const mobileItem = ( this.props.schedule[dateString] ) ? <div className="CalendarMobileEntry"></div> : "";
      calendarItems.push(
        <li key={dateString} id={dateString} className={classNames} onClick={ this.getDate.bind(this)  }>
          <div className="CalendarDateNumber">{ dateNumber }</div>
          <ul className="CalendarDateSchedule desktop">{ schedule }</ul>
          { mobileItem }
        </li>
      );
    }
    return (
      <ul className="CalendarBody">{ calendarItems }</ul>
    );
  }
}

export { CalendarHeader, CalendarWeek, CalendarBody }
