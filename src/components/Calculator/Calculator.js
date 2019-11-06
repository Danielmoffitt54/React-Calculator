import React, { Component } from 'react';
import Screen from '../Screen/Screen';
import './Calculator.scss';

// Main calculator component. Contains our other calculator components.
class Calculator extends Component {
    render() {
        return(
            <div className='Calculator'>
                <Screen />
            </div>
        );
    }
}

export default Calculator;