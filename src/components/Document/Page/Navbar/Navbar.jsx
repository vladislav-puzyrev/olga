import React from 'react';
import styles from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';

function Navbar() {
  return (
      <ul className={styles.list}>
        <NavbarItem text='Ногти' color='#8dbfbe' path='/nails'/>
        <NavbarItem text='Ресницы' color='lightgreen' path='/lashes'/>
      </ul>
  );
}

export default Navbar;
