import React, { Component } from 'react';

const CalendarHead = () => {
  return (
    <thead>
      <tr>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
    </thead>
  );
}

const CalendarBody = () => {
  return (
    <tbody>
      <tr>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>
    </tbody>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="Calendar">
          <CalendarHead />
          <CalendarBody />
        </table>
      </div>
    );
  }
}

export default App;