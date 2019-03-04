import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  customDates = {
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
    return (params.name && this.customDates[params.name]) ? this.customDates[params.name] : params.date;
  }
  render() {
    const dateParam = this.getDateParam();
    return (
      <div className="App">
        <Calendar date={dateParam}  />
        <aside className="Sidebar"></aside>
      </div>
    );
  }
}

export default App;
