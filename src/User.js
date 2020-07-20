import React, { Component } from 'react';
import { useSelector } from 'react-redux';

export default class User extends Component {
    render() {
        const profile = useSelector(state => state.profile);

        return (
            <div>
                <h5>Name -> {profile.name}</h5>
                <h5>Username -> {profile.username}</h5>
            </div>
        )
    }
}
