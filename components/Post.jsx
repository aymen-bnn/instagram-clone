import React from 'react'
import {
    BookmarkIcon,
    HeartIcon,
    PaperAirplaneIcon,
    EllipsisHorizontalIcon,
    ChatBubbleLeftEllipsisIcon,
    FaceSmileIcon,
} from "@heroicons/react/24/outline"
function Post({id,img,username,userImg,caption}) {
  return (
    <div className='bg-white my-7 '>
        {/* Header */}
        <div className='flex p-5 justify-between'>
            <div className='flex justify-center items-center'>
                <img src={userImg } alt="" className='rounded-full h-12 w-12 border p-1 mr-3'/>
                <p className='font-bold'>{username}</p>
            </div>
            <EllipsisHorizontalIcon className='h-8 justify-end'/>  
        </div>
        {/* img */}
        <img className='object-cover w-full' src={img} alt="" />

        {/* Buttons */}
        <div className='flex justify-between p-4'>
            <div className='flex space-x-4'>
             <HeartIcon className='h-8 duration-200 cursor-pointer transition-all hover:scale-125' />
             <ChatBubbleLeftEllipsisIcon className='h-8 duration-200 cursor-pointer transition-all hover:scale-125' />
             <PaperAirplaneIcon className='h-8 duration-200 cursor-pointer transition-all hover:scale-125 -rotate-90' />
             </div>
             <div>
                <BookmarkIcon className='h-8 duration-200 cursor-pointer transition-all hover:scale-125'/>
             </div>

        </div>

        {/* caption */}
        <div>
            <p className='p-5 truncate'>
            <span className='font-bold pr-1'>
                {username}
            </span>
            </p>
            
        </div>

        {/* input box */}
        <div>
            <form action="" className='flex items-center p-4'>
                <FaceSmileIcon className='h-8 pr-3'/>
                <input type="text" 
                className='flex-1 focus:ring-1 border-none focus:border-none'
                placeholder='add a Comment ...'/>
                <button className='font-semibold text-blue-500 px-3'>Post</button>
            </form>
        </div>

    </div>
  )
}

export default Post