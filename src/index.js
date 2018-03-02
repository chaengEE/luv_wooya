import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Home from './Page/Home';
import Write from './Page/Write';
import Detail from './Page/Detail';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/write" component={Write} />
            <Route path="/detail" component={Detail} />
        </div>
    </BrowserRouter>,
    document.getElementById("wrap")
);

registerServiceWorker();
