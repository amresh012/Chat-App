import React from 'react'
import './index.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Chat from './component/Chat'
import Join from './component/Join'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Join/>}/>
       <Route path='/chat' element={<Chat/>}/>
      </Routes>
   </BrowserRouter>

  )
}

export default App
