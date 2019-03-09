import React, { Component } from 'react';
import CalendarData from './CalendarData.js';
import { CalendarHeader, CalendarWeek, CalendarBody } from './CalendarComponents.js';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = new CalendarData(props.date).data;
  }
  formatScheduleData(data) {
    let date = '', hash = {};
    for (let i = 0; i < data.length; i++) {
          const obj = data[i];
          date = (obj.date) ? obj.date : date;
          hash[date] = hash[date] || [];
          hash[date].push(obj.plans);
    }
    return hash;
  }
  render() {
    const schedule = this.formatScheduleData(this.props.schedule)
    return (
      <main className="Calendar">
        <CalendarHeader title={this.state.months} />
        <CalendarWeek />
        <CalendarBody dates={this.state.dates} today={this.state.today} schedule={schedule} />
      </main>
    );
  }
}

export default Calendar;
