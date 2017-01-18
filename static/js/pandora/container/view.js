/**
 * Created by lin on 17/1/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class View extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.props.className}>{this.props.children}</div>;
    }
}

