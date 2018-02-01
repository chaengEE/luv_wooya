import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';

const ClassBinder = classNames.bind(styles);

class Tab extends Component{

    render(){
        return(
            <a href="#" className={ClassBinder(this.props.name)} role="tab" area-selected={this.props.status}>{this.props.text}</a>
        );
    }
}

class TabArea extends Component {
    constructor(){
        super();
        this.tabText = ['tab1', 'tab2'];
        this.tabItems = [];
    }

    componentWillMount(){
        if(this.props.tabText !== undefined){
            this.tabText = this.props.tabText;
        }

        for(var i = 0; i < this.tabText.length; i++){
            this.tabItems.push(<li key={i} role='presentation'><Tab name='tab_item' status={(i === 0) ? 'true' : 'false'} text={this.tabText[i]} /></li>);
        }
    }

    changeTabActivate(e){

        let selectedTab = e.target,
            tabList = document.getElementsByClassName(selectedTab.getAttribute('class'));

        for(var i = 0; i < tabList.length; i++){
            tabList[i].setAttribute('area-selected','false');
        }
        selectedTab.setAttribute('area-selected','true');
    }

    render() {
        return (
            <ul onClick={this.changeTabActivate} className={classNames(styles.tab_list)} role="tablist">{this.tabItems}</ul>
        );
    }
}

export default TabArea;
