'use strict';

import React from 'react';

import Users from './Users.jsx';
import AddUser from './AddUser';

export default class AppContainer extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            users: [{
                id: Date.now(),
                name: 'Jhon'
            }]
        }
    }

    addUser(user){
        this.setState(state=> ({
            users: state.users.concat({id: Date.now(), name: user.name})
        }))
    }

    render() {
        return <div>
            <h2>User App</h2>
            <AddUser addUser={user => this.addUser(user)}/>
            <Users users={this.state.users}/>
        </div>;
    }
}