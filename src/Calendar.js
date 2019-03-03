import React, { Component } from 'react';

const CalendarHeader = () => {
  return (
    <header className="CalendarHeader">
      <h1 className="CalendarHeading">May / June 2019</h1>
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

const CalendarBody = () => {
  let calendarItems = [];
  for (let i = 1; i <= 28; i++) {
    calendarItems.push(<li>{i}</li>);
  }
  return (
    <ul className="CalendarBody">{calendarItems}</ul>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="Calendar">
          <CalendarHeader />
          <CalendarWeek />
          <CalendarBody />
        </main>
        <aside className="Sidebar"></aside>
      </div>
    );
  }
}

export default App;
