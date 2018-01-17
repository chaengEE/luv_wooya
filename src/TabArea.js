import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/index.scss';


class TabArea extends Component {
    render() {
        return (
            <ul className={classNames(styles.tab_list)} role="tablist">
                <li role="presentation"><a href="#" className={classNames(styles.tab_item)} role="tab" area-selected="true">전체</a></li>
                <li role="presentation"><a href="#" className={classNames(styles.tab_item)} role="tab" area-selected="false">좋아요</a></li>
            </ul>
        );
    }
}

export default TabArea;
