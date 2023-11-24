import React, { useState } from 'react'

const Orderonline = () => {

    const [toggleState, settoggleState] = useState(1)

    const toggleTab = (i) => {
        settoggleState(i)
    }
    return (
        <>


            <div className='w-[100%] flex'>

                <div className='w-[30%]'>
                    <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(1)}
                    >No Added Sugar</div>
                    <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(2)}
                    >Seasonal </div>
                    <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(3)}
                    >Friday Funday Flavour</div>

                    <div className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(5)}
                    >Round The Year </div>
                </div>

                <div className='w-[70%] pl-10'>
                    <h1 className='font-semibold text-3xl'>Order Online</h1>
                    <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                        <h2 className='font-semibold'>About this place</h2>
                        <hr className='mb-2 bg-black h-[2px] w-[130px]' />
                        <h1 className='my-5354r '>Menu</h1>
                        <img src="https://b.zmtcdn.com/data/menus/722/50722/c5f310774c2406bb1c96171faa31ad58.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="" />
                        <h1 className='font-semibold mt-5'>   People Say This Place Is Known For</h1>
                        <p>       Great Place, Good Place, Food Quality, Value for Money, Ambience, Service</p>
                    </div>
                    <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                        <h2>Content 2</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id adipisci, unde dolorum tenetur expedita iure earum debitis sapiente iste, modi maiores cum omnis voluptatem quo dicta, facilis nulla mollitia!
                        </p>
                    </div>
                    <div className={toggleState === 5 ? 'content active-content' : 'content'}>
                        <h2>Content 5</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id adipisci, unde dolorum tenetur expedita iure earum debitis sapiente iste, modi maiores cum omnis voluptatem quo dicta, facilis nulla mollitia!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orderonline