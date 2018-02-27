import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';

export class MusicNotePoint extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className={classNames(styles.point)} index={this.props.index} style={this.props.style} onClick={this.props.event}></div>;
    }
}

export class MusicNoteLabel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let labelBox = [];

        if(this.props.isWrite){
            //글쓰기 페이지
            labelBox.push(<label htmlFor={this.props.offset} className={this.props.isShow ? classNames(styles.indicator) : classNames(styles.blind)} key={'k'+this.props.offset}>{this.props.text}</label>);
            labelBox.push(<input className={classNames(styles.code)} type="text" id={this.props.offset} key={this.props.offset} onChange={this.props.setLabel} />);
        }else{
            labelBox.push(this.props.content);
        }

        return(
            <div className={classNames(styles.music_code)}>
                {labelBox}
            </div>
        );
    }
}

export class MusicRecord extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let codeNum = "code"+this.props.row+'-'+this.props.index;
        let lyricsNum = "lyrics"+this.props.row+'-'+this.props.index;
        let isShow = this.props.index%4 === 0 && this.props.isWrite ? true : false;
        let pointList = [], event = this.props.removePoint;

        if(this.props.points !== undefined){
            this.props.points.forEach((data,index) => {
                var position = {
                    top: data.top,
                    left: data.left
                };
                pointList.push(
                    <MusicNotePoint key={index} 
                                    index={index} 
                                    style={position} 
                                    event={event} 
                    />
                );
            });
        }

        return(
            <div className={classNames(styles.music_record)} index={this.props.index}>
                <MusicNoteLabel isWrite={this.props.isWrite} 
                                isShow={isShow}
                                offset={codeNum} 
                                text={'코드'}
                                content={this.props.sheetInfo.code} 
                                setLabel={this.props.setLabel} 
                />

                <div className={classNames(styles.music_note)}>
                    <div className={this.props.isShow ? classNames(styles.indicator,styles.tab) : classNames(styles.blind)}>TAB</div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.first)}></div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.second)}></div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.third)}></div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.fourth)}></div>
                    {pointList}
                </div>

                <MusicNoteLabel isWrite={this.props.isWrite}
                                isShow={isShow}
                                offset={lyricsNum}
                                text={'가사'}
                                content={this.props.sheetInfo.lyrics} 
                                setLabel={this.props.setLabel} 
                />
            </div>
        );
    }
}

export class MusicSheet extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let recordList = [];
        for(var i = 0; i < 4; i++){
            recordList.push(
                <MusicRecord key={i} 
                             index={i}
                             row={this.props.index}
                             isWrite={this.props.isWrite} 
                             code={this.props.code} 
                             lyrics={this.props.lyrics} 
                             sheetInfo={this.props.sheetInfo[i]}
                             points={this.props.sheetInfo[i].points}
                             setLabel={this.props.setLabel} 
                             setPoint={this.props.setPoint} 
                             removePoint={this.props.removePoint} 
                />
            );
        }
        return(
            <div className={classNames(styles.music_sheet)} row-index={this.props.index}>
                {recordList}
                <a href="#" className={classNames(styles.btn_remove)} onClick={this.props.removeRecord}>제거</a>
            </div>
        );
    }
}