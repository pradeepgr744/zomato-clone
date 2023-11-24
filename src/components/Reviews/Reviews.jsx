import React, { useState } from 'react'

const Reviews = () => {

  const [comment, setcomment] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()


    setmainTask([...mainTask, { comment }])

    setcomment("")


    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Reviews are Available..........</h2>
  if (mainTask.length > 0)
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between my-1'>
          <div className='text-md items-center flex justify-between  w-2/3'>
            <h5 className='text-md'>{t.comment}</h5>

          </div>
          <button
            onClick={() => { deleteHandler(i) }}
            className='text-red-500'
          >delete</button>
        </li>
      )
    })


  return (
    <>
      <form className='flex justify-start' onSubmit={submitHandler}>

        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
          value={comment}
          onChange={(e) => setcomment(e.target.value)}

        />



        <button
          className=' text-white bg-blue-500 rounded-full p-3 my-3 font-bold'>
          send
        </button>

      </form>
      <hr />
      <div className='mt-5 p-3 rounded-md bg-gray-300'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default Reviews