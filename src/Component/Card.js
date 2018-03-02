import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import tempImg from './../img/mint.png';

class Card extends Component {
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

export default Card;