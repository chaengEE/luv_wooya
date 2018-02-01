import React from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';

const ClassBinder = classNames.bind(styles);

export const CommonButton = (props) => {
    return <button type={props.type} className={ClassBinder(props.name)}>{props.text}</button>;
};

export default CommonButton;

