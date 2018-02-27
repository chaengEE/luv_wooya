import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import {MusicSheet} from './../Component/MusicSheet';
import database from '../database';

class Write extends Component {
    constructor(){
        super();
        let newSheetInfo = [],
            newSheetIndex = 1;
        for(var i = 0; i < newSheetIndex; i++){
            newSheetInfo[i] = [
                    {
                        code : '',
                        lyrics : '',
                        points : []
                    },
                    {
                        code : '',
                        lyrics : '',
                        points : []
                    },
                    {
                        code : '',
                        lyrics : '',
                        points : []
                    },
                    {
                        code : '',
                        lyrics : '',
                        points : []
                    }
                ];
        }

        this.state = {
            author : '',
            title : '',
            sheetIndex : newSheetIndex,
            sheetInfo : newSheetInfo
        };
    }

    addMusicSheet = e => {
        e.preventDefault();
        let current = this.state.sheetIndex,
            newSheetInfo = this.state.sheetInfo;

        newSheetInfo[current] = [
            {
                code : '',
                lyrics : '',
                points : []
            },
            {
                code : '',
                lyrics : '',
                points : []
            },
            {
                code : '',
                lyrics : '',
                points : []
            },
            {
                code : '',
                lyrics : '',
                points : []
            }
        ];
        current++;

        this.setState({
            sheetIndex : current,
            sheetInfo : newSheetInfo
        });
    }

    clickWriteCancel = e => {
        e.preventDefault();
        window.location = '/';
    }

    saveMusic = e => {
        e.preventDefault();

        let newMusic = database.ref('music').push();

        newMusic.set({
            note : this.state
        }).then(function(){
            window.location = '/';
        });
        
    }

    changeAuthor = e => {
        this.setState({author : e.target.value});
    }

    changeTitle = e =>{
        this.setState({title : e.target.value});
    }

    changeNoteLabel = e => {
        let name = e.target.getAttribute('id'),
            code = name.replace(/[code]|[lyrics]/g,'').split('-'),
            newSheetInfo = this.state.sheetInfo;

        var i = code[0],
            j = code[1];

        if(name.indexOf('code') > -1){
            newSheetInfo[i][j].code = e.target.value;
        }else{
            newSheetInfo[i][j].lyrics = e.target.value;
        }
        this.setState({sheetInfo : newSheetInfo});
    }

    addNote = e => {
        let sheet_index = e.target.parentNode.parentNode.parentNode.getAttribute('row-index'),
            record_index = e.target.parentNode.parentNode.getAttribute('index'),
            noteWidth = e.target.parentNode.clientWidth,
            offsetLeft = e.clientX - 70 - (noteWidth*record_index),
            offsetTop = e.target.offsetTop + 2,
            point_index = this.state.sheetInfo[sheet_index][record_index].points.length,
            sheetInfoList = this.state.sheetInfo;

        let position = {
            top: offsetTop+'px',
            left: offsetLeft+'px'
        };
        sheetInfoList[sheet_index][record_index].points[point_index]=position;
        this.setState({sheetInfo : sheetInfoList});
    }

    removeNote = e => {
        let sheet_index = e.target.parentNode.parentNode.parentNode.getAttribute('row-index'),
            record_index = e.target.parentNode.parentNode.getAttribute('index'),
            removeItem = e.target.getAttribute('index'),
            newSheetInfo = this.state.sheetInfo;

        newSheetInfo[sheet_index][record_index].points.splice(removeItem, 1);

        this.setState({sheetInfo : newSheetInfo});
    }

    removeRecord = e => {
        e.preventDefault();

        let newSheetInfo = this.state.sheetInfo,
            newSheetIndex = this.state.sheetIndex,
            removeIndex = e.target.parentNode.getAttribute('row-index');

        newSheetIndex--;
        newSheetInfo.splice(removeIndex,1);

        this.setState({
            sheetIndex : newSheetIndex,
            sheetInfo : newSheetInfo
        });
    }

    render() {
        let totalMusicSheet = [];
        for(let i = 0; i < this.state.sheetIndex; i++){
            totalMusicSheet.push(
                <MusicSheet key={i} 
                    index={i} 
                    isWrite={true}
                    sheetInfo={this.state.sheetInfo[i]} 
                    setLabel={this.changeNoteLabel} 
                    setPoint={this.addNote} 
                    removePoint={this.removeNote} 
                    removeRecord={this.removeRecord} />
            );
        }

        return(
            <div className={classNames(styles.write_view)}>
                <form name="writeNote" onSubmit={this.saveMusic}>
                    <div className={classNames(styles.author)}>
                        <label htmlFor="author">작성자</label>
                        <span className={classNames(styles.author_area)}>
                            <input type="text" name="author" id="author" value={this.state.author} onChange={this.changeAuthor} />
                        </span>
                    </div>
                    <div className={classNames(styles.title)}>
                        <label htmlFor="title">제목</label>
                        <span className={classNames(styles.title_area)}>
                            <input type="text" name="title" id="title" value={this.state.title} onChange={this.changeTitle} />
                        </span>
                    </div>
                    <div className={classNames(styles.music_sheet_group)}>
                        {totalMusicSheet}
                        <a href="#" onClick={this.addMusicSheet} className={classNames(styles.btn_note)} role="button">타브 추가</a>
                    </div>
                    <div className={classNames(styles.button_area)}>
                        <button onClick={this.clickWriteCancel} className={classNames(styles.btn_cancel)} type="button">취소</button>
                        <button onClick={this.clickWriteSave} className={classNames(styles.btn_save)} type="submit">저장</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Write;
