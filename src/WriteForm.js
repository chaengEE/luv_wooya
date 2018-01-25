import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './scss/index.scss';
import CommonButton from './Buttons';
import {MusicSheet} from './MusicSheet';

class WriteForm extends Component {
    render() {
        return(
            <div className={classNames(styles.write_box)}>
                <form>
                    <div className={classNames(styles.author)}>
                        <label for="author">작성자</label>
                        <span className={classNames(styles.author_area)}>
                            <input type="text" name="author" id="author" />
                        </span>
                    </div>
                    <div className={classNames(styles.title)}>
                        <label for="title">제목</label>
                    <span className={classNames(styles.title_area)}>
                        <input type="text" name="title" id="title" />
                    </span>
                    </div>
                    <div className={classNames(styles.music_sheet_group)}>
                        <CommonButton name="btn_note" text="타브 추가" type="button" />
                        <MusicSheet />
                        <MusicSheet />
                        <MusicSheet />
                        <MusicSheet />
                    </div>
                    <div className={classNames(styles.button_area)}>
                        <CommonButton name="btn_cancel" text="취소" type="button" />
                        <CommonButton name="btn_save" text="저장" type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default WriteForm;
