/*Import all necesary components*/

    /*First import node-mudels components*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

    /*Before import local components*/
import Home from './views/Home';

    /*Render the Router and add a vieẃ for each path*/
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/domicilios-test/" component={Home} />
        </div>
    </Router>,
    document.getElementById('root')
);
