import React from 'react';
import styles from './Cursor.module.css';

function Cursor(props) {
  const style = {
    left: props.cursor.coords[0],
    top: props.cursor.coords[1],
    width: props.cursor.active ? '120px' : '70px',
    height: props.cursor.active ? '120px' : '70px',
    borderColor: props.cursor.color,
  };

  return (
      <div aria-hidden='true' style={style} className={styles.cursor}>
        {props.cursor.active ? <div className={styles.dot}/> : null}
      </div>
  );
}

export default Cursor;
