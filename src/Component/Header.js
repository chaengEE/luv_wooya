import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';


class Header extends Component {
    render() {
        return (
            <div className={classNames(styles.header)}>
                <div className={classNames(styles.logo_wrap)}><div className={classNames(styles.logo)}></div></div>
                <h1 className={classNames(styles.title)}>우야</h1>
            </div>
        );
    }
}

export default Header;
