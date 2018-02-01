import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Home from './Page/Home';
import Write from './Page/Write';
import Detail from './Page/Detail';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="container">
        <Header />
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
        <Router>
            <Route path="/write" component={Write} />
        </Router>
        <Router>
            <Route path="/detail" component={Detail} />
        </Router>
    </div>,
    document.getElementById("wrap")
);

//ReactDOM.render(<Header />, document.getElementById('header'));
//ReactDOM.render(<TabArea tabText={['전체', '좋아요']} />, document.getElementById('tab_area'));
//ReactDOM.render(<CardGroup />, document.getElementById('card_group'));
//
//ReactDOM.render(<WriteForm />, document.getElementById('write_box'));

registerServiceWorker();
