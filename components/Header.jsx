import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon,
        PlusCircleIcon,
        UserGroupIcon,
        HeartIcon,
        PaperAirplaneIcon,
        Bars3Icon} from "@heroicons/react/24/outline"
        import {  HomeIcon } from '@heroicons/react/24/solid'
import {signIn,signOut, useSession } from 'next-auth/react'
import useRouter from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from "../atoms/modalAtoms"
function Header() {
    const {data : session} = useSession()
    const router = useRouter
    const [open,setOpen] = useRecoilState(modalState)
  return (
    <div className='flex justify-between items-center  shadow-sm sticky top-0'>
        {/* Left */}
        <div
            onClick={() => router.push('/')} 
            className='hidden lg:inline-grid cursor-pointer '>
            <Image
            onClick={() => router.push('/')}
            alt=''
            src="https://links.papareact.com/ocw"
            width={100} height={60}
            objectFit="contain" 
             /*resize image*/ />
        </div>
        <div className='lg:hidden cursor-pointer'>
            <Image
            alt=''
            src="https://links.papareact.com/jjm"
            width={40} height={40}
            objectFit="contain" 
             /*resize image*/ />
        </div>
        {/* Middle */}
        <div className="relative mt-1 p-3 rounded-md" >
            <div className='absolute pl-3 inset-y-0 flex items-center'>
                <MagnifyingGlassIcon 
                    className='h-5 w-5 text-gray-500'/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50  block w-full pl-10 pt-2 pb-2 rounded-md focus:border-black '/>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
            
            {
                session?(
                    <>
                    <HomeIcon  
                        className='h-8 w-8 hover:scale-125 max-sm:hidden'/>
                    <div className='relative navbth'>
                    <PaperAirplaneIcon className='h-8 w-8 hover:scale-125 max-sm:hidden -rotate-45'/>
                    <div className='absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-600 text-white rounded-full text-center font-bold' >3</div>
                    </div>
                    <PlusCircleIcon onClick={() => setOpen(true)} className='h-8 w-8 hover:scale-125 max-sm:hidden '/>
                    <UserGroupIcon  className='h-8 w-8 hover:scale-125 max-sm:hidden'/>
                    <HeartIcon  className='h-8 w-8 hover:scale-125 max-sm:hidden'/>
                    <Bars3Icon className='h-8 w-8 hover:scale-125 lg:hidden'/>
                    <img 
                    onClick={signOut}
                        src={session.user.image} 
                        alt=""  
                        className='h-10 w-10 rounded-full'/>
                </>
                ):(
                    <button onClick={signIn}>Sign in</button>
                )
            }
            
        </div>
    </div>
  )
}

export default Header