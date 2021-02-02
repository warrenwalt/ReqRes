import React, { Component } from 'react';
import User from './user';
class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <h1 className='display-3 text-center'>List of Users</h1>
                    <div className='row'>
                        {this.props.users.map(
                            user =>
                                <User
                                    key={user.email}
                                    user={user} />
                        )}
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default Users;