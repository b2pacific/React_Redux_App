import React from 'react';
import { useDispatch } from 'react-redux';
import change from './action';

export default function Indi() {
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{this.props.person.name}</h3>
            <h2>{this.props.person.username}</h2>
            <button onClick={() => dispatch(change(this.props.person))}>See</button>
        </div>
    )
}
