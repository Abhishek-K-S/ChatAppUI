import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import {UserContext} from '../UserContext';
import axios from 'axios';

import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';
import {serverBaseAddress} from '../../config.json';

const Navbar = () => {
    const endPoint = serverBaseAddress+"/logout";
    const {user, setUser} = useContext(UserContext);

    const logout = () =>{
        console.log("logout function called");
        axios.get(
            endPoint,
            {
                headers:{
                    'Content-Type': 'application/json',
                },
                withCredentials: true   
            }    
        ).then((res)=>{
            console.log(res);
            setUser(null);
        }).catch(err =>{
            console.log(err);
        })
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-success mb-2" style={{justifyContent: "flex-start"}} >
            
            <button className="navbar-toggler mr-none" style={{border: 'none', outline: 'none'}}  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to={'/'}><span className="navbar-brand font-weight-bold text-white">Chat</span></Link>
            <div className="collapse navbar-collapse " id="navbarNav">
                {user? <SignedInMenu logout={logout}/>: <SignedOutMenu/>}
            </div>
        </nav>
    )
}

export default Navbar
