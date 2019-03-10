import React, { Component } from 'react';
import CalendarData from './CalendarData.js';
import { CalendarHeader, CalendarWeek, CalendarBody } from './CalendarComponents.js';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = new CalendarData(props.date).data;
  }
  render() {
    return (
      <main className="Calendar">
        <CalendarHeader title={this.state.months} />
        <CalendarWeek />
        <CalendarBody dates={this.state.dates} today={this.state.today} schedule={this.props.schedule} onClick={ e => this.props.onClick(e) } />
      </main>
    );
  }
}

export default Calendar;
