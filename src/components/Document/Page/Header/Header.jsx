import React from 'react';
import styles from './Header.module.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <BurgerMenu asideOpenFunc={props.asideOpenFunc}/>
                <NavLink to='/' className={styles.title} data-cursor-active="white">OLGA</NavLink>
            </div>

            {
                props.asideOpen ||
                <div className={styles.contacts}>
                    <div className={styles.icons}>
                        <div className={styles.whatsup}/>
                    </div>
                    <div className={styles.phone}>+79120499552</div>
                </div>
            }
        </header>
    );
}

export default Header;
