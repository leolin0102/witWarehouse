/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class DataSourcePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return <div key="dataSourcePanel">
            <SearchBar/>
        </div>;
    }
}


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row">

        </div>;
    }
}