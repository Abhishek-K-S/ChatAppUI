import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../UserContext'
import Messages from './Messages/Messages';
import Input from '../Input';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client'

import {serverBaseAddress} from '../../config.json';


let socket;

function Chat() {
    const {user} = useContext(UserContext);
    const {room_id, room_name} = useParams();

    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState('');

    useEffect(()=>{
        socket = io(serverBaseAddress);
        socket.emit('join-room', { name: user.name, room_id, user_id: user._id })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        socket.on('message', (reveivedMessage) =>{        
            setAllMessages([...allMessages, reveivedMessage]);
        });

        socket.on('loadMessages', (reveivedMessage) =>{        
            setAllMessages([...allMessages, ...reveivedMessage]);
        })

    }, [allMessages])

    const sendMessage = (e) =>{
        e.preventDefault();
        if(message){ 
            socket.emit('sendMessage',{ message, room_id}, () =>{
                setMessage('');
            } );
        }
    }

    return (
        <div>
            <div className='row'>{room_name}</div>
            <div className='row'>
                <div className='col bg-light'> 
                    <Messages messages={allMessages} user_id={ user._id}/>
                </div>
            </div>
            
            <div className='row'>
                <div className='col mb-2'>
                    <Input setter={setMessage} getter={message} handler={sendMessage} handlerName='Send' lableName='Enter text here'/>
                </div>
            </div>

        </div>
    )
}

export default Chat;
