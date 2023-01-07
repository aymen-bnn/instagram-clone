import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtoms'
import { Transition,Dialog } from '@headlessui/react'

function Modal() {
    const [open , setOpen] = useRecoilState(modalState)
  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog
        as = 'div' 
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpen}>
            <div className='flex items-end justify-center min-h-[800px] 
            sm:min-h-screen px-4 pt-4 text-center'>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <Dialog.Overlay
                    className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>
                </Transition.Child>
                {/* this for centering the modal contents */}
                <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'>
                    &#8203;
                </span>

                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                > 
                    <div className='inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden 
                    shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 '>
                        <div>
                            <div>
                                <div className='mt-3 text-center sm:mt-5'>
                                    <Dialog.Title
                                    as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                                        Upload a photo
                                    </Dialog.Title>
                                    <div>
                                        <input type="file" hidden />
                                    </div>
                                    
                                </div>
                                <button className='inline-flex w-full justify-center rounded-md boder border-transparent shadow-sm px-4 py-2 bg-black text-base 
                                text-white hover:bg-red-500 focus:outline-none focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300
                                disabled:cursor-not-allowed hover:disabled:bg-gray-300'>
                                    Upload Post
                                </button>
                            </div>
                        </div>
                    </div>  
                </Transition.Child>

            </div>
            
        </Dialog>
    </Transition.Root>
  )
}

export default Modal