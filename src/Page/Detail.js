import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import Header from '../Component/Header';
import {MusicSheet} from '../Component/MusicSheet';
import Popup from '../Component/Popup';
import database from '../database';

class Detail extends Component {
    constructor(){
        super();

        this.state = {
            note : {},
            popup : 'none',
            date : '',
            key : ''
        };
    }

    componentWillMount(){
        let newNote = {},
            datetime = '',
            noteID = this.props.history.location.search.substring(1);

        database.ref('music/'+noteID).once('value')
        .then((snapshot) => {
            newNote = snapshot.val().note;
            datetime = snapshot.val().date;

            this.setState({
                note : newNote,
                date : datetime,
                key : noteID
            });
        });
    }

    goBack = () => {
        this.props.history.push('/');
    }

    showPopup = e => {
        e.target.getAttribute('class').includes('delete')
        ? this.setState({popup : 'delete'})
        : this.setState({popup : 'edit'});
    }

    cancelPopup = e => {
        this.setState({popup : 'none'});
    }

    removeNote = e => {
        e.preventDefault();
        database.ref('music/'+this.state.key).remove()
        .then(
            this.props.history.push('/')
        );
    }

    editNote = e => {
        this.props.history.push('/write?'+this.state.key);
    }

    render() {
        let totalCode = [],
            noticeMessage = this.state.popup === 'delete'
                        ? '악보를 정말 삭제하시겠습니까?'
                        : '악보를 수정하시겠습니까?',
            eventConfirm = this.state.popup === 'delete'
                        ? this.removeNote
                        : this.editNote,
            popupBox = this.state.popup !== 'none'
                        ? <Popup message={noticeMessage} 
                                clickCancel={this.cancelPopup}
                                clickConfirm={eventConfirm} /> 
                        : '';
        
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
        <div className={classNames(styles.container)}>
            <Header />
            <div className={classNames(styles.detail_view)}>
                <h2 className={classNames(styles.title)}>{this.state.note.title}</h2>
                <div className={classNames(styles.author_info)}>
                    <span className={classNames(styles.date)}>{this.state.date}</span>
                    <strong className={classNames(styles.name)}>{this.state.note.author}</strong>
                </div>
                <div className={classNames(styles.music_sheet_group,styles.view_mode)}>
                    {totalCode}
                </div>
                 <div className={classNames(styles.content)}>
                    <span className={classNames(styles.content_area)}>
                        {this.state.note.content}
                    </span>
                </div>
                <div className={classNames(styles.button_area)}>
                    <button onClick={this.goBack} className={classNames(styles.btn_back)} type="button">목록보기</button>
                    <button onClick={this.showPopup} className={classNames(styles.btn_delete)} type="button">삭제</button>
                    <button onClick={this.showPopup} className={classNames(styles.btn_edit)} type="button">수정</button>
                </div>
                {popupBox}
            </div>
        </div>
        );
    }
}

export default Detail;
