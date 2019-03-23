import React, { Component } from 'react';
import CalendarData from './CalendarData.js';
import { CalendarHeader, CalendarWeek, CalendarBody } from './CalendarComponents.js';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = new CalendarData(props.date).data;
  }
  componentWillUpdate(props) {
    if (this.props.date !== props.date) {
      const data = new CalendarData(props.date).data;
      this.setState(data)
    }
  }
  render() {
    return (
      <main className="Calendar">
        <CalendarHeader title={this.state.months} prev={this.state.prev} next={this.state.next} />
        <CalendarWeek />
        <CalendarBody dates={this.state.dates} today={this.state.today} schedule={this.props.schedule} onClick={this.props.onClick} />
      </main>
    );
  }
}

export default Calendar;
