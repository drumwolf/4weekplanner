import React, { Component } from 'react';
import Calendar from './Calendar';
import GSX from './GSX';
import Sidebar from './Sidebar';

class App extends Component {
  events = {
    'peru':       '2018-06-15',
    'laytcomers': '2019-04-20',
    'guatemala':  '2019-06-15'
  }
  constructor() {
    super();
    this.state = { date: this.getDateParam(), schedule: [] }
  }
  componentWillMount() {
    const gsx = new GSX('1d9BnXOfxtv65dAbfbeNvVEpyqYmgMDRKkiC-o5k-T1M');
    gsx.fetch().then( data => this.setState({ schedule: this.formatScheduleData(data) }) );
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
  getDateParam() {
    const params = {};
    const paramArray = window.location.search.substring(1).split('&');
    paramArray.forEach( param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return (params.name && this.events[params.name]) ? this.events[params.name] : params.date;
  }
  onDateClick(date) {
    this.setState({ sbDate: date, sbSchedule: this.state.schedule[date] });
  }
  onSidebarClick() {
    this.setState({ sbDate: null, sbSchedule: null });
  }
  render() {
    return (
      <div className="App">
        <Calendar date={this.state.date} schedule={this.state.schedule} onClick={this.onDateClick.bind(this)} />
        <Sidebar date={this.state.sbDate} schedule={this.state.sbSchedule} onClick={this.onSidebarClick.bind(this)} />
      </div>
    );
  }
}

export default App;
