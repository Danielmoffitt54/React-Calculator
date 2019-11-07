import React, { Component } from 'react';
import './ComputationScreen.scss';

class ComputationScreen extends Component {
    render() {
        return(
            <div className='ComputationScreen'>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default ComputationScreen;