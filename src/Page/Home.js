import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import Header from '../Component/Header';
import Search from '../Component/Search';
import TabArea from '../Component/TabArea';
import Card from '../Component/Card';
import database from '../database';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            cardList : [],
            isShowSearchbar : false,
            searchCardKey : [],
            userInput : ''
        }
    }

    checkUserInput = (e) => {
        let cardKey = [];
        this.setState({userInput : e.target.value});

        console.log(this.state.userInput.length);

        if(this.state.userInput.length <= 1){
            let emptyList = [];
            this.setState({searchCardKey : emptyList});
            this.showAllCard();
        }
        
        database.ref('music/').on("value", (snapshot) => {
            snapshot.forEach((data) => {
                let key = data.key,
                    info = data.val().note;

                if(this.checkDataInclude(info.title,this.state.userInput) 
                    || this.checkDataInclude(info.content,this.state.userInput)
                    || this.checkDataInclude(info.author,this.state.userInput)){
                    cardKey.push(key);
                }
            });
        });

        this.setState({searchCardKey : cardKey});
        this.highlightCard();
    }

    checkDataInclude = (baseData, examData) => {
        let regexp = new RegExp('['+examData+']+',"g");

        if(baseData === undefined || baseData === null){
            return false;
        }

        let matchData = baseData.match(regexp);

        if(matchData !== null && matchData.length > 0){
            return true;
        }
        return false;
    }

    highlightCard = () => {
        let newCardList = [];
        this.state.searchCardKey.forEach((key) => {
            database.ref('music/' + key).on('value', (data) => {
                let key = data.key,
                    info = data.val().note;
                newCardList.push(
                    <Card key={key} 
                        url={'/detail?'+key} 
                        title={info.title} 
                        author={info.author} 
                    />
                );
            }); 
        });
        this.setState({cardList : newCardList});
    }

    showAllCard(){
        let newCardList = [];

        database.ref('music').on('value', (snapshot) => {
            snapshot.forEach((data) => {
                let key = data.key,
                    info = data.val().note;
                newCardList.push(
                    <Card key={key} 
                        url={'/detail?'+key} 
                        title={info.title} 
                        author={info.author} 
                    />
                );
            });
            this.setState({cardList : newCardList});
        });
    }

    showSearchbar = () => {
        if(this.state.isShowSearchbar){
            this.setState({isShowSearchbar : false});
        }else{
            this.setState({isShowSearchbar : true});
        }

        return false;
    }

    componentWillMount(){
        this.showAllCard();
    }

    render() {
        return (
            <div className={classNames(styles.container)}>
                <Header />
                <div className={classNames(styles.contents)}>
                    <TabArea tabText={['전체', '좋아요']} />
                    <Search isShow={this.state.isShowSearchbar} inputData={this.state.userInput} checkUserInput={this.checkUserInput} />
                    <div className={classNames(styles.btn_area)}>
                        <a href="#" className={classNames(styles.btn_search)} role="button" onClick={this.showSearchbar}>검색하기</a>
                        <a href="/write" className={classNames(styles.btn_write)} role="button">글쓰기</a>
                    </div>
                    <div className={classNames(styles.card_group)}>
                        <ul className={classNames(styles.card_list)}>
                            {this.state.cardList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
