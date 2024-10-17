import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageImage from './images/HomePageImage.png'
import CreateGroup from './components/createGroup'
import Home from './components/Home'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home/><createGroup/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
      <div id="mainDiv">

        <div id="pocketNotes-Groups" >
          <h3 id="heading-PocketNotes">Pocket Notes</h3>
          
        </div>


        <div id="Notes">
          <img src={HomePageImage} id="homePageImage" />
          <p id="PN">Pocket Notes</p>
          <p id="PNS">Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
      </div>
    </>
  )
}

export default App
