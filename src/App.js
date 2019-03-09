import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  events = {
    'peru': '2018-06-15',
    'laytcomers': '2019-04-20',
    'guatemala': '2019-06-15'
  }

  constructor() {
    super();
    this.state = { date: this.getDateParam() }
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
        <Calendar date={this.state.date} />
        <aside className="Sidebar"></aside>
      </div>
    );
  }
}

export default App;
