import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import tempImg from './../img/mint.png';

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

                <ul className={classNames(styles.card_list)}>
                    {
                        cardData.map((data, i)=>{
                            return <Card key={i} title={data.title} name={data.name} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export class Card extends Component {
    constructor(){
        super();
        this.state = {
            like : false
        };
        this.addLikeCategory = this.addLikeCategory.bind(this);
    }

    addLikeCategory(){
        if(this.state.like){
            this.setState({like: false});
        }else{
            this.setState({like: true});
        }
    }

    render() {
        return (
            <li className={classNames(styles.card)}>
                <a href="/detail" className={classNames(styles.card_preview)}>
                    <div className={classNames(styles.thumb)}><img src={tempImg} width="100%" alt="임시이미지"/></div>
                    <div className={classNames(styles.thumb_info)}>
                        <p className={classNames(styles.info_title)}>{this.props.title}</p>
                        <span className={classNames(styles.info_author)}>{this.props.name}</span>
                    </div>
                </a>
                <a href="#" onClick={this.addLikeCategory} className={classNames(styles.btn_like)}><span className={this.state.like?classNames(styles.ico_like_full):classNames(styles.ico_like)}>좋아요</span></a>
            </li>
        );
    }
}