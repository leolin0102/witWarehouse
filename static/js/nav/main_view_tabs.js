/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class TabBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ul className="nav nav-tabs">
                    <li role="presentation" className="active"><a href="#">Dashboard</a></li>
        </ul>;
    }
}