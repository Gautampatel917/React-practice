import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-2xl text-center text-orange-600 font-bold m-[28vh]'>User: {userId}</div>
  )
}

export default User