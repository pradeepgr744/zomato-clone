import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-[900px]'>   
        <div className='flex justify-between items-center mt-2 mb-3'>
          <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
            className='w-32 p-2 flex justify-between'
          ></img>
          <input type="text"
            className='border-2 outline-none p-3 w-[400px] h-[35px] rounded-sm'
          placeholder='Search for a dish...' 
          />
          <button className='text-xl text-gray-500'>Log in</button>
          <button className='text-xl text-gray-500'>Sign up</button>
        </div>
        </div>
    </>
  )
}

export default Header