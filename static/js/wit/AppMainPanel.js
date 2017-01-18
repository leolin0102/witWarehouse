/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import DataSourcePanel from "../ds/DataSourcePanel.js"
import DashboardPanel from "../dashboard/DashboardPanel.js"
export default class AppMainPanel extends React.Component {
    constructor(props) {
        super(props);
        this.plugins = initPlugins();
    }

    renderPlugin(plugin) {
        return this.plugins[plugin].panel(null, null);
    }

    componentWillMount() {
    }

    render() {
        const panel = this.props.panel;
        return <div key="mainPanel" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            {this.renderPlugin(panel)}
        </div>;
    }
}

function initPlugins() {
    return {dataSource: {id: "dataSource", panel: React.createFactory(DataSourcePanel)},
            dashboard: {id: "dashboard", panel: React.createFactory(DashboardPanel)}};
}