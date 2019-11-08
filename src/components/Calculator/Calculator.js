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
            result: 0,
            equation: '',
        };
    }

    onButtonPress = (event) => {
        let { result, equation } = this.state;
        const pressedButtonValue = event.target.innerHTML;

        // Determine the action taken depending on value of button pressed.
        if (pressedButtonValue === 'C') {
            this.clear();
            return;
        } else if (pressedButtonValue >= '0' && pressedButtonValue <= '9' || pressedButtonValue === '.') {
            equation += pressedButtonValue;
        } else if (['+', '-', '*', '/', '%'].indexOf(pressedButtonValue) !== -1) {
            equation += ' ' + pressedButtonValue + ' ';
        } else if (pressedButtonValue === '=') {
            // Try-Catch block - Try to run the code inside its block. If it fails and throws an error, deal with it in the catch block.
            try {
                const evalEquation= eval(equation);
                const equationResult = Number.isInteger(evalEquation) ? evalEquation : evalEquation.toFixed(2);
                this.setState({
                    result: equationResult,
                });
            } catch (error) {
                alert('An error has occured. Please recheck your equation.');
                console.log(error)
            }
        } else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
            equation = equation.trim();
        }

        // Update the state with the new version of the equation.
        this.setState({ equation });

        console.log(pressedButtonValue);
    }

    clear() {
        this.setState({
            result: 0,
            equation: '',
        })
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