/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class AppMainPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    initPlugin() {
        return [{id:"dashBoard", panel: ""}];
    }



    render() {
        return <div key="mainPanel" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {this.props.children}
        </div>;
    }
}