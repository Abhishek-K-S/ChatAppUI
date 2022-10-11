import React from 'react';
import {Link} from 'react-router-dom';

function SignedOutMenu() {
    return (
        <ul className="navbar-nav ml-md-auto">
            <li className="nav-item active">
                <Link to={'/Login'}><span className='nav-link'>Login</span></Link>
            </li>
            <li className="nav-item">
                <Link to={'/Signup'}><span className='nav-link'>Signup</span></Link>
            </li>
        </ul>
    )
}

export default SignedOutMenu
