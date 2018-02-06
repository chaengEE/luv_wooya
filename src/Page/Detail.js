import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import {MusicRecord} from './../Component/MusicSheet';

const testData = {
    'author' : '쿠자',
    'title' : '정용화의 반말송 악보올려요!',
    'datetime' : '2018.02.11. AM02:27',
    'code': [
        ['G', 'D', 'Dm', 'E7'],
        ['Am7', 'Am', 'C', 'Dsus4 - D'],
        ['G', 'D', 'Dm', 'E7'],
        ['Am7', 'Am', 'C', 'D'],
        ['G', 'D', 'Em', 'D'],
        ['C - D', 'Bm - Em', 'Am', 'Dsus4 - D'],
        ['G', 'D', 'Em', 'D'],
        ['C - D', 'Bm - Em', 'Am', 'D']
    ],
    'lyrics' : [
        ['맨처음 너를 보던 날','수줍기만 하던','너의 맑은','미소도'],
        ['오늘이 지나면','가까워 질거야','매일 설레는 기대를','해'],
        ['무슨 말을 건네','볼까 어떻게 하면','네가 웃어줄까'],
        ['손을 건네보다','어색해질까봐','멋쩍은 웃음만','웃어봐'],
        ['우리 서로 반말하는 사이가','되기를 아직','조금 서투르고','어색한데도'],
        ['고마워요 라는','말투 대신 좀 더','친하게 말을','해줄래'],
        ['우리 서로 반말하는 사이가','될거야 한걸음씩','천천히','다가와'],
        ['이젠 내 두 눈을','바라보며 말을','해줄래','널 사랑해']
    ]
}

class Detail extends Component {
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

    goBack(e){
        e.preventDefault();
        console.log(window.location);
        window.location = '/';
    }

    render() {
        let totalCode = [],
            totalLyrics = [];
        for(var i = 0; i < testData.code.length; i++){
            for(var j = 0; j < 4; j++){
                totalCode.push(<MusicRecord code={testData.code[i][j]} lyrics={testData.lyrics[i][j]} row={this.props.index}/>);
            }
        }

        return(
            <div className={classNames(styles.detail_view)}>
                <h2 className={classNames(styles.title)}>{testData.title}</h2>
                <div className={classNames(styles.author_info)}>
                    <span className={classNames(styles.date)}>{testData.datetime}</span>
                    <strong className={classNames(styles.name)}>{testData.author}</strong>
                </div>
                <div className={classNames(styles.music_sheet_group)}>
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
