/**
 * Created by lin on 17/1/12.
 */
import React from 'react';
import ReactDOM from 'react-dom';
export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container-fluid">
                    {this.props.children}
                </div>);
    }
}
