import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import {MusicSheet} from './../Component/MusicSheet';

class Write extends Component {
    constructor(){
        super();

        this.state = {
            author : '',
            title : '',
            sheetIndex : 4,
            sheetInfo : []
        };
        this.createSheetInfo();
        this.saveMusicNote = this.saveMusicNote.bind(this);
        this.addMusicSheet = this.addMusicSheet.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeNoteLabel = this.changeNoteLabel.bind(this);
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    createSheetInfo(){
        let newSheetInfo = this.state.sheetInfo;
        for(var i = 0; i < this.state.sheetIndex; i++){
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

        this.setState({sheetInfo : newSheetInfo});
    }

    addMusicSheet(){
        let current = this.state.sheetIndex,
            newSheetInfo = this.state.sheetInfo;

        current+=1;
        newSheetInfo[current-1] = [
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

        this.setState({
            sheetIndex : current,
            sheetInfo : newSheetInfo
        });
    }

    clickWriteCancel(e){
        e.preventDefault();
        console.log(window.location);
        window.location = '/';
    }

    saveMusicNote(e){
        let data = JSON.stringify(this.state.sheetInfo);
        console.log(data);
    }

    changeAuthor(e){
        this.setState({author : e.target.value});
        console.log(this.state.author);
    }

    changeTitle(e){
        this.setState({title : e.target.value});
        console.log(this.state.title);
    }

    changeNoteLabel(e){
        let name = e.target.getAttribute('id');

        var code = name.replace(/[code]|[lyrics]/g,'').split('-');

        var i = code[0],
            j = code[1];

        if(name.indexOf('code') > -1){
            this.state.sheetInfo[i][j].code = e.target.value;
        }else{
            this.state.sheetInfo[i][j].lyrics = e.target.value;
        }

    }

    addNote(e){
        let sheet_index = e.target.parentNode.parentNode.parentNode.getAttribute('row-index'),
            record_index = e.target.parentNode.parentNode.getAttribute('index'),
            noteWidth = e.target.parentNode.clientWidth,
            offsetLeft = e.clientX - 70 - (noteWidth*record_index),
            offsetTop = e.target.offsetTop + 2,
            point_index = this.state.sheetInfo[sheet_index][record_index].points.length,
            sheetInfoList = this.state.sheetInfo;

        let position = {
            index: point_index,
            top: offsetTop+'px',
            left: offsetLeft+'px'
        };
        sheetInfoList[sheet_index][record_index].points[point_index]=position;
        this.setState({sheetInfo : sheetInfoList});
    }

    removeNote(e){
        let sheet_index = e.target.parentNode.parentNode.parentNode.getAttribute('row-index'),
            record_index = e.target.parentNode.parentNode.getAttribute('index'),
            removeItem = e.target.getAttribute('index'),
            newSheetInfo = this.state.sheetInfo;

        newSheetInfo[sheet_index][record_index].points.pop(removeItem);

        this.setState({sheetInfo : newSheetInfo});
    }

    render() {
        let totalMusicSheet = [];
        for(let i = 0; i < this.state.sheetIndex; i++){
            totalMusicSheet.push(<MusicSheet isWrite={true} key={i} index={i} sheetInfo={this.state.sheetInfo[i]} setLabel={this.changeNoteLabel} setPoint={this.addNote} removePoint={this.removeNote} />);
        }

        return(
            <div className={classNames(styles.write_view)}>
                <form name="writeNote" onSubmit={this.saveMusicNote}>
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
