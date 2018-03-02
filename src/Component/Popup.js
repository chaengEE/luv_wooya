import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';

class Popup extends Component{

	render(){
		return(
			<div>
				<div className={classNames(styles.dimmed)}></div>
				<div className={classNames(styles.popup)}>
					<p className={classNames(styles.message)}>{this.props.message}</p>
					<div className={classNames(styles.btn_area)}>
						<button onClick={this.props.clickCancel} className={classNames(styles.btn_cancel)} type="button">취소</button>
						<button onClick={this.props.clickConfirm} className={classNames(styles.btn_confirm)} type="button">확인</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Popup;