import React, { Component } from 'react';
import './Keypad.scss';
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return(
            <div className='Keypad'>
                <KeypadRow>
                    <Button type='primary'>C</Button>
                    <Button type='primary'>&larr;</Button>
                    <Button type='operator'>%</Button>
                    <Button type='operator'>/</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button type='value'>7</Button>
                    <Button type='value'>8</Button>
                    <Button type='value'>9</Button>
                    <Button type='operator'>*</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button type='value'>4</Button>
                    <Button type='value'>5</Button>
                    <Button type='value'>6</Button>
                    <Button type='operator'>-</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button type='value'>1</Button>
                    <Button type='value'>2</Button>
                    <Button type='value'>3</Button>
                    <Button type='operator'>+</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button type='value'>0</Button>
                    <Button type='value'>.</Button>
                    <Button type='submit'>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;