import React, { Component } from 'react';
import ResultsScreen from '../ResultsScreen/ResultsScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';
import './Screen.scss';

// Component that holds the results screen and calculation screen
class Screen extends Component {
    render() {
        return(
            <div className='Screen'>
                <ResultsScreen>
                    {this.props.result}
                </ResultsScreen>
                <ComputationScreen>
                    {this.props.equation}
                </ComputationScreen>
            </div>
        );
    }
}

export default Screen;