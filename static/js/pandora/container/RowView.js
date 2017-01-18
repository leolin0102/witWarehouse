/**
 * Created by lin on 17/1/17.
 */
import View from './view.js'

import React from 'react';
import ReactDOM from 'react-dom';
export default class RowView extends View {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row">{this.props.children}</div>;
    }
}
