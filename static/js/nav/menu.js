/**
 * Created by lin on 17/1/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                {this.props.children}
            </ul>
        </div>;
    }
}