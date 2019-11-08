import React, { Component } from 'react';
import './Keypad.scss';
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {

    render() {
        return(
            <div className='Keypad'>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type={['primary']}>C</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['primary']}>&larr;</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['operator']}>%</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['operator']}>/</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>7</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>8</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>9</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['operator']}>*</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>4</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>5</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>6</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['operator']}>-</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>1</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>2</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>3</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['operator']}>+</Button>
                </KeypadRow>
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type={['value', 'btmLeft']}>0</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['value']}>.</Button>
                    <Button onButtonPress={this.props.onButtonPress} type={['submit', 'btmRight']}>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;