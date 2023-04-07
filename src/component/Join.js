import React , {useState} from 'react'
import './Index.css'
import '../index.css'
import{Link} from 'react-router-dom'

const Join = () => {
  const [name , setNmae] = useState('')
  const [room , setRoom] = useState('')

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer border-2 border-gray-400 rounded-md p-10  '>
        <h1 className='heading text-white font-bold border-b-4 mb-2'>Join</h1>
        <div><input placeholder='Name' className='joinInput font-bold text-xl'type="text" onChange={(e) => setNmae(e.target.value)}/></div>
        <div><input placeholder='Username' className='joinInput mt-20 font-bold text-xl'type="text" onChange={(e) => setRoom(e.target.value)}/></div>
        <Link onClick={e =>(!name || !room )? e.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
        <button className="button mt-20 hover:bg-red-300" type="submit">Sign In</button>
        </Link>

      </div>
      
    </div>
  )
}

export default Join