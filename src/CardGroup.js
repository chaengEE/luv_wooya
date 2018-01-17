import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/index.scss';
import WriteButton from './Buttons';
import tempImg from './img/mint.png';

const cardData = [
    {
        title : "일이삼사오육칠팔구십",
        name : "도레미"
    },
    {
        title : "일이삼사오육칠팔구십일이삼사오육칠팔구십",
        name : "레미"
    },
    {
        title : "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
        name : "솔라"
    },
    {
        title : "일이삼사오육칠팔구십일이삼사오육칠팔구십",
        name : "도레미파솔라시도레미파솔라시도"
    },
    {
        title : "일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십",
        name : "도미솔"
    }
];

export class CardGroup extends Component {

    render(){
        return(
            <div className={classNames(styles.card_group)}>
                <WriteButton />
                <ul className={classNames(styles.card_list)}>
                    {
                        cardData.map((data)=>{
                            return <Card title={data.title} name={data.name} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export class Card extends Component {
    render() {
        return (
            <li className={classNames(styles.card)}>
                <a href="#">
                    <div className={classNames(styles.thumb)}><img src={tempImg} width="100%" alt="임시이미지"/></div>
                    <div className={classNames(styles.thumb_info)}>
                        <p className={classNames(styles.info_title)}>{this.props.title}</p>
                        <span className={classNames(styles.info_author)}>{this.props.name}</span>
                    </div>
                </a>
            </li>
        );
    }
}