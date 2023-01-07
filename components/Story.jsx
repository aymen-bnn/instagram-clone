import React from 'react'

function Story({img,username}) {
  return (
    <div>
        <img src={img} alt=""  
        className='cursor-pointer h-14 w-14 rounded-full p-1 
        border-2 border-red-500 hover:scale-110 transition transform duration-200'/>
        <p className='text-xs w-14 truncate '>{username}</p>
    </div>
  )
}

export default Story