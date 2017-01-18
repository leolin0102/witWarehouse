import React from 'react';
import ReactDOM from 'react-dom';

import WitApp from "./wit/WitApp.js"

var witApp = ReactDOM.render(
    <WitApp/>,
    document.getElementById('root')
);

witApp.switchPanel('dashboard');