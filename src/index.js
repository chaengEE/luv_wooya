import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import TabArea from './TabArea';
import {CardGroup} from './CardGroup';
import {MusicSheet} from './MusicSheet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<TabArea />, document.getElementById('tab_area'));
ReactDOM.render(<CardGroup />, document.getElementById('card_group'));

ReactDOM.render(<MusicSheet />, document.getElementById('music_sheet'));

registerServiceWorker();
