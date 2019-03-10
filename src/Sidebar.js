import React from 'react';

const Sidebar = (props) => {
  const schedule = (props.schedule) ? props.schedule.map( item => <li>{item}</li> ) : null;
  const status = (props.schedule) ? 'open' : null;
  const styles = ['Sidebar', status].join(' ');
  return (
    <aside className={styles}>
      <h2>{props.date}</h2>
      <ul>{schedule}</ul>
    </aside>
  );
}

export default Sidebar