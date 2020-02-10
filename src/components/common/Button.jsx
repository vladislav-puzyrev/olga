import React from "react";
import styles from './Button.module.css';

function Button({text, href, color}) {
    return (
        <a target='_blank' data-cursor-active={color} href={href} className={styles.button}>
            {text}
        </a>
    );
}

export default Button;