import React from 'react'
import {Link} from 'react-router-dom'

function SignedInMenu({logout}) {
    return (
        <ul className="navbar-nav ml-md-auto">
            <li className="nav-item">
                <Link to='/' onClick = {logout}><span className='nav-link'>Logout</span></Link>
            </li>
        </ul>        
    )
}

export default SignedInMenu
