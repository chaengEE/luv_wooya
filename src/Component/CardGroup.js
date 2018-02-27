import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import tempImg from './../img/mint.png';
import database from '../database';

export class CardGroup extends Component {
    constructor(){
        super();
        this.state = {
            cardList : []
        };
    }

    componentWillMount(){
        database.ref('music').on('value', (snapshot) => {
            let newCardList = [];

            snapshot.forEach((data)=>{
                let key = data.key,
                    info = data.val().note;
                newCardList.push(
                    <Card key={key} 
                        url={'/detail?'+key} 
                        title={info.title} 
                        author={info.author} 
                    />
                );
            });

            this.setState({cardList : newCardList});
        });
    }

    render(){
        return(
            <div className={classNames(styles.card_group)}>

                <ul className={classNames(styles.card_list)}>
                    {this.state.cardList}
                </ul>
            </div>
        );
    }
}

export class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            like : false
        };
    }

    addLikeCategory = (e) => {
        e.preventDefault();
        
        if(this.state.like){
            this.setState({like: false});
        }else{
            this.setState({like: true});
        }
    }

    render() {
        return (
            <li className={classNames(styles.card)}>
                <a href={this.props.url} className={classNames(styles.card_preview)}>
                    <div className={classNames(styles.thumb)}><img src={tempImg} width="100%" alt="임시이미지"/></div>
                    <div className={classNames(styles.thumb_info)}>
                        <p className={classNames(styles.info_title)}>{this.props.title}</p>
                        <span className={classNames(styles.info_author)}>{this.props.author}</span>
                    </div>
                </a>
                <a href="#" onClick={this.addLikeCategory} className={classNames(styles.btn_like)}><span className={this.state.like?classNames(styles.ico_like_full):classNames(styles.ico_like)}>좋아요</span></a>
            </li>
        );
    }
}