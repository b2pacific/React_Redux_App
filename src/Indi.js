import React from 'react';
import { useDispatch } from 'react-redux';
import change from './action';



export default function Indi(props) {
    const dispatch = useDispatch();
    const link = "/user/"+ props.person.username;
    return (
        <div>
            <h3>{props.person.name}</h3>
            <h2>{props.person.username}</h2>
            <button onClick={() => dispatch(change(props.person))}> <a href={ link }>See</a> </button>
        </div>
    )
}
