import React from 'react'
import { Link } from 'react-router-dom'

function Roundedcard({name,image}) {
  return (
    <>
      <Link to="/Cardinfo">
        <div className='text-center cursor-pointer'>
          <div className='flex justify-center '>
           
            <img src={image?.imageUrl||image?.url}
              alt='snippet.title'
              className="h-[130px] pb-1 rounded-full"
            />
          </div>
          <h2 className='text-xl text-gray-700'>{name}</h2>

        </div>
      </Link>
    </>
  )
}
export default Roundedcard