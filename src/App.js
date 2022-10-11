import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import {UserContext} from './components/UserContext';

import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

import Navbar from './components/layout/Navbar';
import ErrPage from './components/ErrPage';

import {serverBaseAddress} from './config.json';

function App() {
  console.log(serverBaseAddress)

  const [user, setUser] = useState(null);
  const endPoint = serverBaseAddress+"/verifyuser"

  useEffect(()=>{
    const verifyUser = () =>{
      console.log('verify user is being run')
      axios.get(
        endPoint,
        {
            headers:{
                'Content-Type': 'application/json',
                
            },
            withCredentials: true   
        }    
      ).then((res) =>{
        console.log("this is result verify user", res);
        setUser(res.data);
      }).catch(err =>{
        console.log("this is verify user error", err.response);
      })
    }
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("our user", user);

  return(
    <Router>
      <UserContext.Provider value = {{user, setUser}}>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/chat/:room_id/:room_name' component={Chat}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route path='/' component={ErrPage}/>
          </Switch>
        </div>
        </UserContext.Provider>
    </Router>
  )
}

export default App;