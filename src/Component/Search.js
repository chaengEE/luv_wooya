import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import database from '../database';

class Search extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className={this.props.isShow?classNames(styles.searchbar,styles.isShow):classNames(styles.searchbar)}>
				<span className={classNames(styles.btn_search)}><span className={classNames(styles.blind)}>검색</span></span>
				<span className={classNames(styles.search_data)}>
					<input type="text" name="search" id="search" placeholder="검색어를 입력해주세요" value={this.props.inputData} onChange={this.props.checkUserInput} />
				</span>
			</div>
		)
	}
}

export default Search;