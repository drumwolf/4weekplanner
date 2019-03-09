import React, { Component } from 'react';
import Calendar from './Calendar';
import GSX from './GSX';

class App extends Component {
  events = {
    'peru': '2018-06-15',
    'laytcomers': '2019-04-20',
    'guatemala': '2019-06-15'
  }

  constructor() {
    super();
    this.state = { date: this.getDateParam(), schedule: [] }
  }
  componentWillMount() {
    const gsx = new GSX('1d9BnXOfxtv65dAbfbeNvVEpyqYmgMDRKkiC-o5k-T1M');
    gsx.fetch().then( data => this.setState({ schedule: data }) );
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
  render() {
    return (
      <div className="App">
        <Calendar date={this.state.date} schedule={this.state.schedule} />
        <aside className="Sidebar"></aside>
      </div>
    );
  }
}

export default App;
