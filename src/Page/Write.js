import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import {MusicSheet} from './../Component/MusicSheet';

class Write extends Component {
    constructor(){
        super();
        this.state = {
            noteLine : 4
        }
        this.addMusicSheet = this.addMusicSheet.bind(this);
    }

    addMusicSheet(){
        let current = this.state.noteLine;
        this.setState({noteLine : (current+1)});
    }

    clickWriteCancel(e){
        e.preventDefault();
        console.log(window.location);
        window.location = '/';
    }

    render() {
        let totalMusicSheet = [];
        for(let i = 0; i < this.state.noteLine; i++){
            totalMusicSheet.push(<MusicSheet isWrite={true} key={i} index={i} />);
        }

        return(
            <div className={classNames(styles.write_view)}>
                <form>
                    <div className={classNames(styles.author)}>
                        <label htmlFor="author">작성자</label>
                        <span className={classNames(styles.author_area)}>
                            <input type="text" name="author" id="author" />
                        </span>
                    </div>
                    <div className={classNames(styles.title)}>
                        <label htmlFor="title">제목</label>
                    <span className={classNames(styles.title_area)}>
                        <input type="text" name="title" id="title" />
                    </span>
                    </div>
                    <div className={classNames(styles.music_sheet_group)}>
                        <a href="#" onClick={this.addMusicSheet} className={classNames(styles.btn_note)} role="button">타브 추가</a>
                        {totalMusicSheet}
                    </div>
                    <div className={classNames(styles.button_area)}>
                        <button onClick={this.clickWriteCancel} className={classNames(styles.btn_cancel)} type="button">취소</button>
                        <button onClick={this.clickWriteCancel} className={classNames(styles.btn_save)} type="button">저장</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Write;
