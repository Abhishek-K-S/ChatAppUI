import React from 'react'

const Message = ({message, user_id}) => {
    let sender = user_id === message.user_id? true: false;
    return(
        sender?(<div className="float-right bg-success text-light mb-2 rounded px-2 p-1 mr-2 ml-5">
            <div className='small font-weight-bold'>
                {message.name}
            </div>
            <p className='m-0 text-break'>{message.text}</p>
            
        </div>):
        (<div className='float-left bg-dark text-light mb-2 rounded px-2 p-1 ml-2 mr-5'>
            <div className='small font-weight-bold'>
                {message.name}
            </div>
            <p className='m-0 text-break'>{message.text}</p>
        </div>)
    )
}

export default Message