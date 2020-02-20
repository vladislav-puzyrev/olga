import React from 'react';
import styles from './Circle.module.css';
import {NavLink} from 'react-router-dom';

function Circle(props) {
  const style = props.state.isHover ? ({
    backgroundColor: props.color,
    transform: 'scale(0.5)',
  }) : ({
    border: '1px solid ' + props.color,
  });

  const activeStyle = {
    backgroundColor: props.color,
    transform: 'scale(0.5)',
    transition: '0s',
  };

  return (
      <NavLink
          to={props.path}
          activeStyle={activeStyle}
          className={styles.link}
          data-cursor-active={props.color}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
      >
        <div style={style} className={styles.div}
             data-cursor-active={props.color}/>
      </NavLink>
  );
}

export default Circle;
