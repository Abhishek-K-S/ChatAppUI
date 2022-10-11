import React, {useState, useContext} from 'react';
import axios from 'axios';
import {UserContext} from '../UserContext';
import { Redirect } from 'react-router-dom';
import {serverBaseAddress} from '../../config.json';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {user, setUser} = useContext(UserContext);

    const submitHandler = async (e) =>{
        e.preventDefault();
        axios.post(
            serverBaseAddress+"/login",
            JSON.stringify({ email, password}),
            {
                headers:{
                    'Content-Type': 'application/json',
                },
                withCredentials: true
                
            }    
        ).then(res =>{
            console.log("this is result object", res);
            setEmailError('');
            setPasswordError('');
            if(res.data.user){
                setUser(res.data.user);
            }
        }).catch(({response}) =>{
            if(response && response.data !== undefined){
                setEmailError(response.data.email);
                setPasswordError(response.data.password);
            }
            else{
                alert("no response data")
            }
        })
    }

    if(user){
        return <Redirect to="/" />
    }

    return (
        <div className='row'>
            <div className='col'>
                <form onSubmit={submitHandler}>
                    {/* <div className="form-row mb-3">
                        <div className="col">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id='firstName' placeholder="First name" />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id='lastName' placeholder="Last name" />
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" placeholder='Example: John@mail.com' onChange={(e)=>setEmail(e.target.value)} value={email} aria-describedby="emailError"/>
                        <small id="emailError" className="form-text text-danger">{emailError}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" placeholder='*********' onChange={(e)=> setPassword(e.target.value)} value={password} aria-describedby="passwordError"/>
                        <small id="passwordError" className="form-text text-danger">{passwordError}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
