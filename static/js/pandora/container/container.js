/**
 * Created by lin on 17/1/12.
 */
import View from './view.js'
import RowView from './RowView.js'

import React from 'react';
import ReactDOM from 'react-dom';
export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.views = props.views;
    }

    renderView(){
        return [<RowView key="1">
                    <View key="view1" className="col-sm-3 col-md-2 sidebar"/>
                    <View key="view2" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"/>
                </RowView>];
    }

    render() {
        const element = this.renderView();

        return (<div className="container-fluid">
                    {element}
                </div>);
    }
}
