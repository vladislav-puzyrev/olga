import React from 'react';
import styles from './BurgerMenu.module.css';

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));

        this.props.asideOpenFunc();
    }

    render() {
        return (
            <div className={styles.wrapper} onClick={this.handleClick}>
                <div className={`${styles.burgerMenu} ${this.state.isOpen ? styles.burgerMenuActive : ''}`}></div>
            </div>
        );
    }
}

export default BurgerMenu;
