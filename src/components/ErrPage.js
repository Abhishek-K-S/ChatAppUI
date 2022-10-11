import React from 'react'
import { Link } from 'react-router-dom'

const ErrPage = () => {
    return (
        <center className='mt-4'>
            <div className='display-2 mb-2'>404</div>
            <div className='text-danger h2'>PAGE NOT FOUND</div>
            <div>The page you are looking for is not available, broken or permanently moved to a new address. 
                <Link to={'/'}>Go back to home</Link>
            </div>
        </center>
    )
}

export default ErrPage
