import React from 'react';
import styles from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import {NavLink} from 'react-router-dom';
import Button from '../../../common/Button';

function Header(props) {
  const ContactsStyle = {
    'visibility': props.asideOpen ? 'hidden' : 'visible',
  };

  return (
      <header className={styles.header}>
        <div className={styles.left}>
          <BurgerMenu asideOpenFunc={props.asideOpenFunc}/>
          <NavLink to='/' className={styles.title}
                   data-cursor-active="white">OLGA</NavLink>
        </div>

        <div style={ContactsStyle} className={styles.contacts}>
          <Button
              text='Записаться на приём'
              href='https://ekb.moiprofi.ru/olgapovarnitsyna1/'
              color='#FFF345'/>
          <div className={styles.icons}>
            <div className={styles.whatsup}/>
            <div className={styles.phone}>+79120499552</div>
          </div>
        </div>
      </header>
  );
}

export default Header;
