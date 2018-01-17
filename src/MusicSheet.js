import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/index.scss';

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

let index = 0;
const code = "code";
const lyrics = "lyrics";

export class MusicRecord extends Component {

    render(){
        let codeNum = code+this.props.index;
        let lyricsNum = lyrics+this.props.index;
        let isShow = this.props.index%4 == 0 ? true : false;

        return(
            <div className={classNames(styles.music_record)} index={this.props.index}>
                <div className={classNames(styles.music_code)}>
                    <label for={codeNum} className={isShow ? classNames(styles.indicator) : classNames(styles.blind)}>코드</label>
                    <input type="text" id={codeNum} />
                </div>
                <MusicNote isShow={isShow} />
                <div className={classNames(styles.music_lyrics)}>
                    <label for="lyrics" className={isShow ? classNames(styles.indicator) : classNames(styles.blind)}>가사</label>
                    <input type="text" id={lyricsNum} />
                </div>
            </div>
        );
    }
}

export class MusicSheet extends Component {
    render(){
        return(
            <div className={classNames(styles.music_sheet)}>
                <MusicRecord index={index} />
                <MusicRecord index={index+1} />
                <MusicRecord index={index+2} />
                <MusicRecord index={index+3} />
            </div>
        );
        index += 4;
    }
}