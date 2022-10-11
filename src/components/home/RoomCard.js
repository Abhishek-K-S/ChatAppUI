import React from 'react'

const RoomCard = ({room, to}) => {
    return (
            <div className="card shadow-sm" key={room._id} style={{width: 'auto'}}>
                <div className='card-body'>
                    {room.name}
                </div>
            </div>
    )
}

export default RoomCard
