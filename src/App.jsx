import React from 'react'


import Cardinfo from './components/Cardinfo/Cardinfo';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Data from './components/Data/Data';

const App = () => {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path="" element={<Data />} />
        <Route path='Cardinfo' element={<Cardinfo />} />
      </Route>
    ))
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}



export default App



