import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Card({info:{cfo,image,locality,rating,cuisine}, order}) {
  const [cuisinename, setcuisinename] = useState([])

  
  for(let i = 0; i < cuisine.length; i++){
    cuisinename.push(cuisine[i]?.name)
    // console.log(cuisine[i]?.name)
  }

  return (
    <>
     
      <Link to="/Cardinfo">
        <div
          className="w-[273px] m-2 rounded-xl border shadow-xl hover:shadow-gray-600 hover:w-[305px] cursor-pointer">

          <img src={image?.url}
            alt='snippet.title'
            className="h-[200px] w-full p-2 pb-0 rounded-3xl object-cover"
          /> 



          <div className="mt-0 px-3 flex justify-between">
            <h1 className="text-lg font-semibold text-gray-600">{locality.name}</h1>
            <div>
              <h2 className="bg-green-700 text-xs text-white px-1 m-1 rounded-md">{rating?.rating_text}&#9733;</h2>
            </div>
          </div>
          <div className="mt-0 px-3 flex justify-between">
            <h1 className="text-md text-gray-500">{cuisinename.join(", ")}</h1>
            <div>
              <h2 className="text-sm text-gray-500">{cfo.text}</h2>
            </div>
          </div>
          <div className="text-right px-3 mb-3">
            <h1 className='text-xs font-bold text-gray-500'>{order.deliveryTime}</h1>
          </div>

        </div>
      </Link>
    </>
  )
}
export default Card