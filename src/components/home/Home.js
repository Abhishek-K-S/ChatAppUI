import React, {useContext, useState, useEffect} from 'react'
import { UserContext } from '../UserContext'
import RoomList from './RoomList';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import {serverBaseAddress} from '../../config.json';

var socket;

const Home = () => {
    const server = serverBaseAddress;
    const {user} = useContext(UserContext);

    const [room, setRoom] = useState('');
    const [roomsList, setRoomsList] = useState([]);

    useEffect(()=>{
        socket = io(server);
        return ()=>{
            socket.disconnect();
        }
    }, [server])
    
    useEffect(() => {
        socket.on('loadRooms', rooms =>{
            setRoomsList(rooms)
        })
    }, [])

    useEffect(()=>{
        socket.on('roomCreated', (res)=>{
            setRoomsList([...roomsList, res]);
        })
        console.log(roomsList)
    }, [roomsList])

    const submitHandler = (e) =>{
        e.preventDefault();
        socket.emit('create-room', {name: room});
        setRoom('');
    }

    if(!user){
        return <Redirect to='/login' />
    }

    return (
        <div className='row mt-2'>
            <div className='col-md'>
                <div className="card text-center shadow-sm" style={{width: 'auto'}}>
                    <div className="card-body">
                        <h5 className="card-title">Welcome {user? user.name: ""}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Join a room</h6>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="roomName">Room name</label>
                                <input type="text" className="form-control" id="roomName" placeholder='Enter the room name' value={room} onChange={(e) => setRoom(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Go To Chat</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card text-center shadow-sm" style={{width: 'auto'}}>
                    <div className="card-body">
                        <RoomList rooms={roomsList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
