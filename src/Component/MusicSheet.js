import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';

export class MusicNote extends Component {
    render() {
        return (
            <div className={classNames(styles.music_note)}>
                <div className={this.props.isShow ? classNames(styles.indicator,styles.tab) : classNames(styles.blind)}>TAB</div>
                <div className={classNames(styles.line, styles.first)}></div>
                <div className={classNames(styles.line, styles.second)}></div>
                <div className={classNames(styles.line, styles.third)}></div>
                <div className={classNames(styles.line, styles.fourth)}></div>
            </div>
        );
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
            labelBox.push(<label htmlFor={this.props.offset} className={this.props.isShow ? classNames(styles.indicator) : classNames(styles.blind)}>{this.props.text}</label>);
            labelBox.push(<input className={classNames(styles.code)} type="text" id={this.props.offset} key={this.props.offset} />);
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

        return(
            <div className={classNames(styles.music_record)} index={this.props.index}>
                <MusicNoteLabel content={this.props.code} isWrite={this.props.isWrite} isShow={isShow} offset={codeNum} text={'코드'} />
                <MusicNote isShow={isShow} />
                <MusicNoteLabel content={this.props.lyrics} isWrite={this.props.isWrite} isShow={isShow} offset={lyricsNum} text={'가사'} />
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
                <MusicRecord code={this.props.code} code={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={0} />
                <MusicRecord code={this.props.code} code={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={1} />
                <MusicRecord code={this.props.code} code={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={2} />
                <MusicRecord code={this.props.code} code={this.props.lyrics} isWrite={this.props.isWrite} row={this.props.index} index={3} />
            </div>
        );
    }
}