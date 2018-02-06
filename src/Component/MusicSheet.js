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

        this.props.recordInfo.points.map(function(data,index){
            var position = {
                top: data.top,
                left: data.left
            };
            pointList.push(<MusicNotePoint key={index} index={index} style={position} event={event} />);
        });

        return(
            <div className={classNames(styles.music_record)} index={this.props.index}>
                <MusicNoteLabel content={this.props.code} isWrite={this.props.isWrite} isShow={isShow} offset={codeNum} text={'코드'} setLabel={this.props.setLabel} />

                <div className={classNames(styles.music_note)}>
                    <div className={this.props.isShow ? classNames(styles.indicator,styles.tab) : classNames(styles.blind)}>TAB</div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.first)}></div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.second)}></div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.third)}></div>
                    <div onClick={this.props.setPoint} className={classNames(styles.line, styles.fourth)}></div>
                    {pointList}
                </div>

                <MusicNoteLabel content={this.props.lyrics} isWrite={this.props.isWrite} isShow={isShow} offset={lyricsNum} text={'가사'} setLabel={this.props.setLabel} />
            </div>
        );
    }
}

export class MusicSheet extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={classNames(styles.music_sheet)} row-index={this.props.index}>
                <MusicRecord code={this.props.code} lyrics={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={0} recordInfo={this.props.sheetInfo[0]} setLabel={this.props.setLabel} setPoint={this.props.setPoint} removePoint={this.props.removePoint} />
                <MusicRecord code={this.props.code} lyrics={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={1} recordInfo={this.props.sheetInfo[1]} setLabel={this.props.setLabel} setPoint={this.props.setPoint} removePoint={this.props.removePoint} />
                <MusicRecord code={this.props.code} lyrics={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={2} recordInfo={this.props.sheetInfo[2]} setLabel={this.props.setLabel} setPoint={this.props.setPoint} removePoint={this.props.removePoint} />
                <MusicRecord code={this.props.code} lyrics={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={3} recordInfo={this.props.sheetInfo[3]} setLabel={this.props.setLabel} setPoint={this.props.setPoint} removePoint={this.props.removePoint} />
            </div>
        );
    }
}