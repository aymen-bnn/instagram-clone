import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggentions"
  
function Feed() {
  return (
    <main className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3  md:max-w-3xl mx-auto'>
        {/* RightSection */}
        <section className='col-span-2'>

            {/* Stories */}
            <Stories/>
            {/* posts  */}
            <Posts/>
        </section>
        {/* Left Section */}
        <section className='xs:hidden sm:hidden  xl:inline-grid md:col-span-1'>
            <div className='fixed p-8'>
                {/* mini profile */}
                <MiniProfile/>
                {/* Seggestions */}
                <Suggestions/>
            </div>
        </section>
    </main>
  )
}

export default Feed