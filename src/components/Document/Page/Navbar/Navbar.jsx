import React from 'react';
import styles from './Navbar.module.css';
import NavbarItem from "./NavbarItem/NavbarItem";

function Navbar() {
    return (
        <ul className={styles.list}>
            <NavbarItem text='Маникюр' color='#8dbfbe' path='/manicure'/>
            <NavbarItem text='Педикюр' color='#ca8fc7' path='/pedicure'/>
            <NavbarItem text='Рестницы' color='lightgreen' path='/lashes'/>
        </ul>
    );
}

export default Navbar;
