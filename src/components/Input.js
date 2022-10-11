import React from 'react'

const Input = ({setter, getter, handler, handlerName}) => {
    return (
        <form onSubmit={handler}>
            <div className='row'>
                <div className='col-11'>
                    <input type="text" className="form-control" id="message" placeholder='Type here' value={getter} onChange={(e) => setter(e.target.value)} />
                </div>
                <div className='col'>
                    <button type="submit" className="btn btn-primary">{handlerName}</button>    
                </div>
            </div>
            
            
        </form>
    )
}

export default Input
