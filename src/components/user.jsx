import React, { Component } from 'react';
class User extends Component {
    render() {
        return (
            <React.Fragment>

                <div className='col-6 col-sm-4 col-lg-2'>
                    <div className="card m-2" style={{ width: '12rem'}}>
                        <img src={this.props.user.avatar} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{this.props.user.first_name} { this.props.user.last_name }</p>
                            <p className="card-text">{ this.props.user.email }</p>
                            <p className="card-text">{ this.props.user.job }</p>
                            <p className="card-text">{ this.props.user.occ }</p>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default User;