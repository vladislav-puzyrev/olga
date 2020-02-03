import React from 'react';
import styles from './NavbarItem.module.css';
import {NavLink} from "react-router-dom";
import Circle from "./CircleLink/Circle";

class NavbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHover: false};

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(event) {
        this.setState({
            isHover: true
        });
    }

    handleMouseLeave(event) {
        this.setState({
            isHover: false
        });
    }

    render() {
        const style = this.state.isHover ? ({
            backgroundColor: this.props.color,
            transform: 'scale(0.5)'
        }) : ({
            border: '1px solid ' + this.props.color
        });

        const activeStyle = {
            backgroundColor: this.props.color,
            transform: 'scale(0.5)',
            transition: '0s'
        };

        return (
            <li className={styles.listItem}>
                <Circle activeStyle={activeStyle}
                        style={style}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onClick={() => {alert(123)}}
                        state={this.state} path={this.props.path}
                        color={this.props.color}/>

                <NavLink onMouseEnter={this.handleMouseEnter}
                         onMouseLeave={this.handleMouseLeave}
                         style={{color: this.props.color}}
                         data-cursor-active={this.props.color}
                         className={styles.text}
                         to={this.props.path}>
                    {this.props.text}
                </NavLink>
            </li>
        );
    }
}

export default NavbarItem;
