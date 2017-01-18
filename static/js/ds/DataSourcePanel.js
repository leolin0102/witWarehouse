/**
 * Created by lin on 17/1/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class DataSourcePanel extends React.Component {
    constructor(props) {
        super(props)
        this.onSearchChange = this.onSearchChange.bind(this);
        this.state = {value: ''};
    }

    componentWillMount() {
    }

    onSearchChange(value) {
        console.log(value);
        this.setState({value: value});
    }

    render() {
        const value = this.state.value;
        return <div key="dataSourcePanel">
            <SearchBar value={value} onChange={this.onSearchChange}/>

            <div className="row">
                <div className="col-xs-6 col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            Basic panel example
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            Basic panel example
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        return <div className="row">
                <div className="form-group">
                    <input type="text" value={value} onChange={this.handleChange} className="form-control" id="filter"/>
                </div>
            </div>;
    }
}

