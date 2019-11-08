import React, { Component } from 'react';
import './Calculator.scss';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

// Main calculator component. Contains our other calculator components.
class Calculator extends Component {
    // Constructor function to set our initial state.
    constructor(props) {
        super(props);
        this.state = {
            result: 150,
            equation: '2*5',
        };
    }

    onButtonPress = (event) => {
        console.log('onButtonPress called');
    }

    render() {
        return(
            <div className='Calculator'>
                <Screen 
                    result={this.state.result} 
                    equation={this.state.equation} 
                />
                <Keypad onButtonPress={this.onButtonPress}/>
            </div>
        );
    }
}

export default Calculator;