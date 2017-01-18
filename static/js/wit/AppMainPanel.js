/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import DataSourcePanel from "../ds/DataSourcePanel.js"

export default class AppMainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.plugins = initPlugins();
        this.state = {panel: "dataSource"}
    }

    renderPlugin(plugin) {
        return this.plugins[plugin].panel;
    }

    switchPanel(panelId) {
        console.log("switch to: " +panelId);
    }

    render() {
        return <div key="mainPanel" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {this.renderPlugin(this.state.panel)}
        </div>;
    }
}

function initPlugins() {
    return {dataSource: {id: "dataSource", panel: <DataSourcePanel/>}};
}