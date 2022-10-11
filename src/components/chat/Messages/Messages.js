import React from 'react'
import Message from './Message';
import STB from 'react-scroll-to-bottom';

const Messages = ({messages, user_id}) => {
    return (
        <STB>
            { messages.length !==0? messages.map((message)=>{
                return(
                    <div className='clearfix'><Message key={message._id} message={message} user_id={user_id}/></div>
                )
            }):'no messages to display'}
        </STB>
    )
}

export default Messages
