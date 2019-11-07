import React, { Component } from 'react';
import './Keypad.scss';
import KeypadRow from '../KeypadRow/KeypadRow';

class Keypad extends Component {
    render() {
        return(
            <div className='Keypad'>
                <KeypadRow></KeypadRow>
                <KeypadRow></KeypadRow>
                <KeypadRow></KeypadRow>
                <KeypadRow></KeypadRow>
                <KeypadRow></KeypadRow>
            </div>
        );
    }
}

export default Keypad;