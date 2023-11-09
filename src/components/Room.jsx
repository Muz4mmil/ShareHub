import React from 'react'

const Room = () => {
  return (
    <div className='container max-w-[380px] flex flex-col justify-between shadow-xl max-sm:shadow-none bg-white p-4 rounded-xl'>
      <div className="logo font-bold text-3xl max-sm:text-2xl text-center ">Share<span className='bg-slate-600 rounded text-white font-medium px-[3px] ml-[2px]'>Hub</span></div>
      <form className="input mt-8 border-2 border-slate-600 w-full text-xl flex justify-between rounded-lg overflow-hidden">
        <input type="text" placeholder='Enter Room Code' className='w-48 border-none outline-none px-4'/>
        <button type='submit' className='bg-slate-600 text-white w-32 py-2'><i class="fa-solid fa-arrow-right-to-bracket"></i> Enter</button>
      </form>
    </div>
  )
}

export default Room