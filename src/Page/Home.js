import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import TabArea from '../Component/TabArea';
import {CardGroup} from '../Component/CardGroup';


class Home extends Component {
    render() {
        return (
            <div className={classNames(styles.contents)}>
                <TabArea tabText={['전체', '좋아요']} />
                <div className={classNames(styles.btn_area)}>
                    <a href="/write" className={classNames(styles.btn_write)} role="button">글쓰기</a>
                </div>
                <CardGroup />
            </div>
        );
    }
}

export default Home;
