import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Page/Home';
import Write from './Page/Write';
import Detail from './Page/Detail';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/write" component={Write} />
            <Route path="/detail" component={Detail} />
        </div>
    </BrowserRouter>,
    document.getElementById("wrap")
);

registerServiceWorker();
