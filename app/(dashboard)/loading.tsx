import React from 'react'
import { VscLoading } from 'react-icons/vsc'

const Loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-slate-200'>
      <VscLoading size={40} className="animate-spin text-center" />
    </div>
  )
}

export default Loading;
