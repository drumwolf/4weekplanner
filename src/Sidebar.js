import React from 'react';

const Sidebar = (props) => {
  const schedule = (props.schedule) ? props.schedule.map( item => <li>{item}</li> ) : null;
  return (
    <aside className="Sidebar">
      <h2>{props.date}</h2>
      <ul>{schedule}</ul>
    </aside>
  );
}

export default Sidebar