import React, { Component } from 'react';

class GetUser extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <h1 className='display-3 text-center text-success'>Get User</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <form onSubmit={this.props.submitGetHandler}>
                                <div className="mb-3">
                                    <label className="form-label">ID</label>
                                    <input
                                        name='id'
                                        id='ID'
                                        type="number"
                                        className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                        <div className='col-6'>
                                <div className="card m-2" style={{ width: '18rem' }}>
                                <img src={this.props.getuser.avatar} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{this.props.getuser.first_name} {this.props.getuser.last_name}</p>
                                    <p className="card-text">{this.props.getuser.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default GetUser;