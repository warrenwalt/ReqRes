import React, { Component } from 'react';

class DeleteUSer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <h1 className='display-3 text-center text-danger'>Delete User</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                        <div className='col-6'>
                            <div className="card m-2" style={{ width: '12rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">info goes here</p>
                                    <p className="card-text">info goes here</p>
                                    <p className="card-text">info goes here</p>
                                    <p className="card-text">info goes here</p>
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

export default DeleteUSer;