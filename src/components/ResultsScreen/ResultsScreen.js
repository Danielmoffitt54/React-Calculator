import React, { Component } from 'react';
import './ResultsScreen.scss';

class ResultsScreen extends Component {
    render() {
        return(
            <div className="ResultsScreen">
                {this.props.children}
            </div>
        );
    }
}

export default ResultsScreen;