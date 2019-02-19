import React, { Component } from 'react';

const CalendarHead = () => {
  return (
    <thead>
      <tr>
        <td>Sunday</td>
        <td>Monday</td>
        <td>Tuesday</td>
        <td>Wednesday</td>
        <td>Thursday</td>
        <td>Friday</td>
        <td>Saturday</td>
      </tr>
    </thead>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="Calendar">
          <CalendarHead />
        </table>
      </div>
    );
  }
}

export default App;
