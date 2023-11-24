import React, { useState } from 'react'
import Reviews from '../Reviews/Reviews'
import Orderonline from '../Orderonline/Orderonline'
import Img from '../../Img/Img'

const Cardinfo = () => {

    const [toggleState, settoggleState] = useState(1)

    const toggleTab = (i) => {
        settoggleState(i)
    }

    return (

        <>
            <div className='w-[900px]'>
                <div className='flex '>
                    <div>
                        <img src="https://b.zmtcdn.com/data/pictures/chains/2/50722/7496c99fb30ced637f2179b57439c4d5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
                    </div>
                    <div className='columns-2'>
                        <img src="https://b.zmtcdn.com/data/pictures/chains/2/50722/020eb0940cd4557608bfcd008f339ed5.jpg?fit=around|300:273&crop=300:273;*,*" />
                        <img src="https://b.zmtcdn.com/data/pictures/chains/2/50722/943a9bde187da7934108998954a52095.jpg?fit=around|300:273&crop=300:273;*,*" />
                        <img src="https://b.zmtcdn.com/data/pictures/chains/2/50722/6aa6809bbb39f27e7cd9fd3b32d1f48c.jpg?fit=around|300:273&crop=300:273;*,*" />
                    </div>

                </div>
                <div className='w-[900px]'>
                    <div className='flex justify-between ml-0 pl-0'>
                        <h1 className='font-semibold text-3xl'>Natural Ice Cream</h1>
                        <div className='flex items-center '>

                            <h1 className='bg-green-600 rounded-md'>3.2&#9733;</h1>
                            <h1>Dining Reviews</h1>
                        </div>
                    </div>
                    <h2>St. Marks Road, Bangalore</h2>
                    <h3>7am-9pm(Today)</h3>
                </div>

                <div className='container '>

                    <div className='flex pt-10'>
                        <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(1)}
                        >Overview</div>
                        <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(2)}
                        >Order Online</div>
                        <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(3)}
                        >Reviews</div>
                        <div className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(4)}
                        >Photos</div>
                        <div className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(5)}
                        >Menu</div>
                    </div>

                    <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                        <h2 className='font-semibold'>About this place</h2>
                        <hr className='mb-2 bg-black h-[2px] w-[130px]' />
                        <h1 className='my-5354r '>Menu</h1>
                        <img src="https://b.zmtcdn.com/data/menus/722/50722/c5f310774c2406bb1c96171faa31ad58.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="" />
                        <h1 className='font-semibold mt-5'>   People Say This Place Is Known For</h1>
                        <p>       Great Place, Good Place, Food Quality, Value for Money, Ambience, Service</p>
                    </div>
                    <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                        <Orderonline />
                    </div>
                    <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                        <Reviews />
                    </div>
                    <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                        <div className='columns-2'><Img />
                        </div></div>
                    <div className={toggleState === 5 ? 'content active-content' : 'content'}>
                        <h2 className='font-semibold text-3xl pb-6'>Menu</h2>
                        <img src="https://b.zmtcdn.com/data/menus/722/50722/c5f310774c2406bb1c96171faa31ad58.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardinfo