import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/index.scss';

class WriteButton extends Component {
    render() {
        return (
            <button type="button" className={classNames(styles.btn_write)}>글쓰기</button>
        );
    }
}

export default WriteButton;
