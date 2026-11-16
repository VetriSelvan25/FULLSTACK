import React from 'react'
import {useState} from "react"
const App = () => {
    const [show,setShow]=useState(false)
  return (

    <div>
        <h2>Welcome to My Website</h2>
        <button onClick={()=>setShow(true)}>
           show
        </button>
        <button onClick={()=>setShow(false)}>
           hide
        </button>
        <br /><br />
       <h2> {show && <h4>Welcome</h4>}</h2>
    </div>
  )
}




export default App


