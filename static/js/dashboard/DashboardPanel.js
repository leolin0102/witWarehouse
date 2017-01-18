/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import TabBar from "../nav/main_view_tabs.js"

export default class DashboardPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return <div key="dataSourcePanel">
            <TabBar/>
        </div>;
    }
}
