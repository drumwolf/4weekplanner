import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Calendar />
        <aside className="Sidebar"></aside>
      </div>
    );
  }
}

export default App;
