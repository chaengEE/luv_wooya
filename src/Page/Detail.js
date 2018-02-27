import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import {MusicSheet} from './../Component/MusicSheet';
import database from '../database';

class Detail extends Component {
    constructor(){
        super();
        this.state = {
            note : {}
        };
    }

    goBack = e => {
        e.preventDefault();
        window.location = '/';
    }

    componentDidMount = () => {
        let key = window.location.search.substring(1),
            newNote = {};

        database.ref('music/'+key).once('value')
        .then((snapshot) => {
            newNote = snapshot.val().note;

            this.setState({
                note : newNote
            });
        });
    }

    render() {
        let totalCode = [];
        console.log(this.state.note);

        for(var i = 0; i < this.state.note.sheetIndex; i++){
            totalCode.push(
                <MusicSheet key={i} 
                    index={i} 
                    isWrite={false}
                    sheetInfo={this.state.note.sheetInfo[i]}
                />
            );
        }

        return(
            <div className={classNames(styles.detail_view)}>
                <h2 className={classNames(styles.title)}>{this.state.note.title}</h2>
                <div className={classNames(styles.author_info)}>
                    <span className={classNames(styles.date)}>2018.02.11</span>
                    <strong className={classNames(styles.name)}>{this.state.note.author}</strong>
                </div>
                <div className={classNames(styles.music_sheet_group,styles.view_mode)}>
                    {totalCode}
                </div>
                <div className={classNames(styles.button_area)}>
                    <button onClick={this.goBack} className={classNames(styles.btn_back)} type="button">목록보기</button>
                </div>
            </div>
        );
    }
}

export default Detail;
