import React, { Component } from 'react';
import './KeypadRow.scss';

class KeypadRow extends Component {
    render() {
        return(
            <div className='KeypadRow'>
                {this.props.children}
            </div>
        );
    }
}

export default KeypadRow;