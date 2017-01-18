/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import View from '../pandora/container/view.js'
import RowView from '../pandora/container/RowView.js'
import Menu from "../nav/menu.js"
import TabBar from "../nav/main_view_tabs.js"
import AppContainer from "../pandora/container/container.js"
import AppMainPanel from "./AppMainPanel.js"

export default class WitApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {panel: "dataSource"};
    }

    switchPanel(panel) {
        this.setState({panel: panel});
    }

    sideMenu() {
        return <Menu key="menu"/>;
    }

    render() {
        const panel = this.state.panel;
        return (<AppContainer>
            <RowView key="1">
                {this.sideMenu()}
                <AppMainPanel panel={panel} delegate={this}/>
            </RowView>
        </AppContainer>);
    }
}