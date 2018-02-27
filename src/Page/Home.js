import React, { Component } from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from './../scss/index.scss';
import TabArea from '../Component/TabArea';
import {CardGroup} from '../Component/CardGroup';

// const firebaseApp = firebase.initializeApp({
//     apiKey:
//     authDomain
//     databaseURL
//     projectId
//     storageBucket
//     messagingSenderId
// });

// firebaseApp.database().ref('key/data').set({
//     'user' : 'nana',
//     'email' : 'a@he.com'
// })
// key database에 data필드에 데이터를 삽입

// firebaseApp.database().ref('key/data').update({
//     'user' : 'mimi'
// });
// 데이터를 수정.
// firebaseApp.database().ref('key/data').update({
//     'age' : '45'
// });
// 없는 데이터를 수정하려고 하면 필드를 생성하여 추가
// update 대신 set을 사용하면 기존에 있던 user,email은 제거

// firebaseApp.database().ref('key/data').remove();
// firebaseApp.database().ref('key/data/user').remove();
// 필드 제거

// firebaseApp.database().ref('key/data').once('value')
// .then(function(snapshot){
//      console.log(snapshot.val());
// });
// once는 파이어베이스와 연결해서 한번만 가져오고 연결을 끊어버려서 파이어베이스의 값이 바뀌어도 알 수 없다.
// once에 'value'는 정해진 키워드이므로 확인 필요

// firebaseApp.database().ref('key/data').on('value', function(snapshot){
//      console.log(snapshot.val());
// });
// 데이터를 가져온 후에도 연결을 끊지 않고 유지한다.
// 파이어베이스의 값이 바뀌면 코드에 반영해준다.
// 성능에 영향을 미칠 수 있으니 꼭 필요한 곳에만 사용한다.

class Home extends Component {

    render() {
        return (
            <div className={classNames(styles.contents)}>
                <TabArea tabText={['전체', '좋아요']} />
                <div className={classNames(styles.btn_area)}>
                    <a href="/write" className={classNames(styles.btn_write)} role="button">글쓰기</a>
                </div>
                <CardGroup />
            </div>
        );
    }
}

export default Home;
