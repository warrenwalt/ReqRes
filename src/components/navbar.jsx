import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return ( 
            <nav className='navbar navbar-light bg-light sticky-top'>
                <p className='navbar-brand' href="#">
                    <span className='badge badge-pill badge-success'>GET</span>
                </p>
                <p className='navbar-brand' href="#">
                    <span className='badge badge-pill badge-primary'>POST</span>
                </p>
                <p className='navbar-brand' href="#">
                    <span className='badge badge-pill badge-danger'>DELETE</span>
                </p>
                <p className='navbar-brand' href="#">
                    <span className='badge badge-pill badge-info'>UPDATE</span>
                </p>
            </nav>
         );
    }
}
 
export default NavBar;