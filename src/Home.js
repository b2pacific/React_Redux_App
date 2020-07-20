import React, { Component } from 'react';
import Indi from './Indi';

export default class Home extends Component {

    render() {
    
        return (
            <div>
                { this.props.people.map( item => <Indi person={item} /> ) }
            </div>
        )
    }
}
