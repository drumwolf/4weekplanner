import React from 'react';

const DAYSPERWEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Sidebar = (props) => {
  const schedule = (props.schedule) ? props.schedule.map( item => <li key={item}>{item}</li> ) : null;
  const status = (props.schedule) ? 'open' : null;
  const styles = ['Sidebar', status].join(' ');
  const formatDate = (dateString) => {
    if (!dateString) { return null }
    const [yy, mm, dd] = dateString.split('-').map( obj => Number(obj) );
    const date = new Date(yy, mm - 1, dd);
    const day = DAYSPERWEEK[ date.getDay() ];
    return `${day} ${mm}/${dd}`;
  }
  return (
    <aside className={styles} onClick={props.onClick}>
      <h2><code>{formatDate(props.date)}</code></h2>
      <ul>{schedule}</ul>
    </aside>
  );
}

export default Sidebar