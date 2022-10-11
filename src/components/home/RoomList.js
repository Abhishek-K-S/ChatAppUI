import React from 'react'
import RoomCard from './RoomCard'
import { Link } from 'react-router-dom';

const RoomList = ({rooms}) => {
    return (
        <div>
            {rooms && rooms.map((room)=>{
                return(
                    <Link to={'/chat/'+room._id+'/'+room.name} key ={room.id}>
                        <RoomCard  room={room} to={'/chat'}/>
                    </Link>
                ) 
            })}
        </div>
    )
}

export default RoomList
