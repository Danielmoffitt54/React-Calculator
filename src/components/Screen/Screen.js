import React, { Component } from 'react';
import ResultsScreen from '../ResultsScreen/ResultsScreen';
import './Screen.scss';

// Component that holds the results screen and calculation screen
class Screen extends Component {
    render() {
        return(
            <div className='Screen'>
                <ResultsScreen>
                    <h1>0</h1>
                </ResultsScreen>
            </div>
        );
    }
}

export default Screen;