import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Card from '../Card/Card';
import Roundedcard from '../Roundedcard/Roundedcard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const data = [{
    id: 1,
    name: 'Pizza',
    img: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
},
{
    id: 2,
    name: 'Pizza',
    img: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
}, {}, {}, {}, {}, {}, {}, {},]

const datacard = [{
    id: 1,
    name: 'Nandhini Deluxe',
    img: 'https://b.zmtcdn.com/data/pictures/chains/4/50714/527f3baa5ed9aa3a739c36f9fc410404_o2_featured_v2.jpg?output-format=webp',
    Rating: 4.1,
    types: "Andhra,Biryani",
    price: 200,
    time: 22
},
{
    id: 2,
    name: 'Nandhini Deluxe',
    img: 'https://b.zmtcdn.com/data/pictures/chains/4/50714/527f3baa5ed9aa3a739c36f9fc410404_o2_featured_v2.jpg?output-format=webp',
    Rating: 4.1,
    types: 'Andhra,Biryani',
    price: 150,
    time: 20
}, {}, {}, {}, {}, {}, {}, {},]





const Outerbody = ({data:{0:{page_data:{sections:{SECTION_SEARCH_RESULT}}}}}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const [rounded1, setrounded1] = useState(SECTION_SEARCH_RESULT[0].items)
    const [rounded2, setrounded2] = useState(SECTION_SEARCH_RESULT[1].items)
    const [card, setcard] = useState(SECTION_SEARCH_RESULT.slice(2))

    
    

    console.log(card)


    return (
        <>
            <div className='w-[900px]'>

                <div className='flex items-center p-5'>
                    <img src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png'
                        width={40}
                        className='bg-yellow-500 rounded-full'
                    />
                    <h2 className='text-xl pl-4 font-semibold text-red-500'>Delivery</h2>
                </div>

                <div >
                    <h1 className='font-semibold text-3xl my-7'>Inspiration for your first order</h1>
                    <Slider {...settings}>
                        {rounded1.map((d,i) => (
                            <Roundedcard name={d.name} image={d.image}  key={i}
                             />
                        ))}
                    </Slider>
                </div>


                <div >
                    <h1 className='font-semibold text-3xl my-7'>Top brands for you</h1>
                    <Slider {...settings}>

                    {rounded2.map((d,i) => (
                            <Roundedcard name={d.name} image={d.image}  key={i}
                             />
                        ))}
                    </Slider>
                </div>
                
                <div >
                    <h1 className='font-semibold text-3xl my-7'>Delivery Restaurants in Bengaluru</h1>
                    <div className='flex flex-wrap justify-center '>
                    {card.map((d,i) => (
                            <Card info={d.info} name={d.name} rating={d.rating} order={d.order}  key={i}
                             />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Outerbody