import React, { Component } from 'react';
import './ResultsScreen.scss';

class ResultsScreen extends Component {
    render() {
        return(
            <div className="ResultsScreen">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

export default ResultsScreen;