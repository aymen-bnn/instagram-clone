import React from 'react'
import { signOut , useSession } from 'next-auth/react'

function MiniProfile() {
  const {data : session} = useSession();
  console.log(session)
  return (
    <div className='flex justify-between items-center'>
        <div className='flex '>
            <img 
            className='mr-5  rounded-full border p-1 h-14 w-14' src={session ? session.user.image : "none"} alt="" />
            <div>
                <h2 className='font-bold'>
                  { 
                    session? 
                    session.user.name
                    .split(" ")
                    .join("")
                    .toLocaleLowerCase()
                    :"robot.me"
                  }
                </h2>
                <h3>Welcome to Instagram !</h3>
            </div>
        </div>
        <div>
            <button className='text-blue-500 font-bold'>Sign out</button>
            
        </div>
    </div>
  )
}

export default MiniProfile